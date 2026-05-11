"""
NGSS Alignment Mapper for JóvenesSTEM modules.json
Updates alignmentFooter for every module with:
  - Specific NGSS HS standard code(s)
  - RENAC code
  - BlueBook page range
"""

import json, copy, re

# ─── NGSS MAPPING TABLE ───────────────────────────────────────
# Keys match module id prefixes (section number)
# Values: (ngss_codes, bluebook_pages)
NGSS_MAP = {
    # Intro chapter
    "0.": (["HS-ETS1-1"], "pp. 4-11"),

    # Chapter 1: Ciencia
    "1.1.": (["HS-ESS1-1", "HS-ESS1-2"],          "pp. 13-19"),
    "1.2.": (["HS-ESS1-4", "HS-PS4-1"],            "pp. 20-22"),
    "1.3.": (["HS-ESS1-1", "HS-ESS1-3"],           "pp. 23-25"),
    "1.4.": (["HS-PS2-4", "HS-ESS1-5"],            "pp. 26-30"),
    "1.5.": (["HS-ESS2-4", "HS-ESS2-6"],           "pp. 31-33"),
    "1.6.": (["HS-ESS1-1", "HS-ESS1-3", "HS-PS3-4"], "pp. 34-38"),
    "1.7.": (["HS-PS1-1", "HS-PS1-8"],             "pp. 39-45"),
    "1.8.": (["HS-PS1-8", "HS-PS3-1"],             "pp. 46-51"),
    "1.9.": (["HS-PS4-1", "HS-PS4-3", "HS-PS4-5"], "pp. 52-60"),
    "1.10.": (["HS-PS3-1", "HS-ESS1-2"],           "pp. 61-65"),
    "1.11.": (["HS-ETS1-1", "HS-ETS1-3"],          "pp. 66-68"),

    # Chapter 2: Tecnología
    "2.1.": (["HS-ETS1-1", "HS-ETS1-2"],           "pp. 71-76"),
    "2.2.": (["HS-PS4-2", "HS-PS4-5"],             "pp. 71-83"),
    "2.3.": (["HS-PS4-1", "HS-PS4-5"],             "pp. 96-101"),
    "2.4.": (["HS-PS4-1", "HS-PS4-2"],             "pp. 84-95"),
    "2.5.": (["HS-PS1-3", "HS-ETS1-2"],            "pp. 105-110"),
    "2.6.": (["HS-ETS1-2", "HS-ETS1-4"],           "pp. 111-118"),
    "2.7.": (["HS-PS2-1", "HS-ETS1-2"],            "pp. 119-123"),
    "2.8.": (["HS-PS3-3", "HS-PS1-7"],             "pp. 124-133"),
    "2.9.": (["HS-PS1-3", "HS-PS2-6"],             "pp. 134-136"),
    "2.10.": (["HS-LS1-1", "HS-LS3-1"],            "pp. 137-141"),

    # Chapter 3: Programación
    "3.1.": (["HS-ETS1-1", "HS-ETS1-2"],           "pp. 143-146"),
    "3.2.": (["HS-ETS1-1"],                        "pp. 147-148"),
    "3.3.": (["HS-ETS1-1", "HS-ETS1-2"],           "pp. 149-161"),
    "3.4.": (["HS-ETS1-2", "HS-ETS1-4"],           "pp. 171-178"),
    "3.5.": (["HS-ETS1-1", "HS-ETS1-3"],           "pp. 179-180"),
    "3.6.": (["HS-ETS1-2", "HS-ETS1-4"],           "pp. 181-182"),
    "3.7.": (["HS-ETS1-1", "HS-ETS1-3"],           "pp. 183-184"),

    # Chapter 4: BlueBook v2 Topics (advanced)
    "4.":   (["HS-PS1-8", "HS-ETS1-1", "HS-ETS1-2"], "BlueBook v2"),
}

RENAC_CODE = "EC009"

def get_ngss_for_module(module_id):
    """Find best matching NGSS entry for a module ID."""
    # Try longest prefix match first
    for prefix_len in [6, 5, 4, 3, 2]:
        # e.g. "1.10." then "1.10" then "1.1." etc.
        parts = module_id.split(".")
        if len(parts) >= prefix_len // 2:
            candidate = ".".join(parts[:2]) + "."
            if candidate in NGSS_MAP:
                return NGSS_MAP[candidate]
            # try single digit prefix
            candidate2 = parts[0] + "."
            if candidate2 in NGSS_MAP:
                return NGSS_MAP[candidate2]
    return (["HS-ETS1-1"], "BlueBook v1")


def build_footer(ngss_codes, pages):
    codes_str = ", ".join(ngss_codes)
    return f"NGSS: {codes_str} | RENAC: {RENAC_CODE} | BlueBook {pages}"


def update_fulltext_footer(fulltext, new_footer_line):
    """Replace the inline alignment footer at the end of fullText."""
    # Pattern: line that starts with 📐 or contains "Alineación Académica" or "NGSS & RENAC"
    pattern = r'\n+---\n\*\*📐[^\*]+\*\*\s*$'
    new_section = f'\n\n---\n**📐 {new_footer_line}**'
    result = re.sub(pattern, new_section, fulltext, flags=re.DOTALL)
    if result == fulltext:
        # No match found — append
        result = fulltext.rstrip() + new_section
    return result


def main():
    input_path = "/Users/yepz/JSweb/data/modules.json"
    backup_path = "/Users/yepz/JSweb/data/modules.json.bak"

    print("Loading modules.json...")
    with open(input_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Backup
    with open(backup_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Backup saved to {backup_path}")

    updated = 0
    unchanged = 0

    for ch in data.get("chapters", []):
        for mod in ch.get("modules", []):
            mid = mod.get("id", "")
            ngss_codes, pages = get_ngss_for_module(mid)
            new_footer = build_footer(ngss_codes, pages)

            # Update alignmentFooter field
            old_af = mod.get("alignmentFooter", "")
            mod["alignmentFooter"] = new_footer

            # Update fullText inline footer
            ft = mod.get("fullText", "")
            if ft:
                mod["fullText"] = update_fulltext_footer(ft, new_footer)

            if old_af != new_footer:
                updated += 1
                print(f"  ✅ {mid}: {new_footer}")
            else:
                unchanged += 1

    print(f"\nDone: {updated} updated, {unchanged} unchanged")

    with open(input_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print("modules.json saved.")


if __name__ == "__main__":
    main()
