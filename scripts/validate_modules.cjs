const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data/modules.json', 'utf8'));
const seen = new Map();
const errors = [];
let moduleCount = 0;
let fullTextCount = 0;
let keyPointCount = 0;
let totalWords = 0;

if (!Array.isArray(data.chapters)) {
  errors.push('data/modules.json must contain a chapters array.');
} else {
  for (const chapter of data.chapters) {
    if (!chapter.id) errors.push('Chapter missing id.');
    if (!chapter.title) errors.push(`Chapter ${chapter.id || '(unknown)'} missing title.`);
    if (!Array.isArray(chapter.modules)) {
      errors.push(`Chapter ${chapter.id || '(unknown)'} missing modules array.`);
      continue;
    }

    for (const module of chapter.modules) {
      moduleCount += 1;
      const id = String(module.id || '').trim();
      if (!id) errors.push(`Chapter ${chapter.id} has module without id.`);
      if (seen.has(id)) errors.push(`Duplicate module id ${id} in ${seen.get(id)} and ${chapter.id}.`);
      seen.set(id, chapter.id);

      if (!module.title) errors.push(`Module ${id} missing title.`);
      if (!module.content && !module.fullText) errors.push(`Module ${id} missing content/fullText.`);
      if (module.fullText) fullTextCount += 1;
      if (Array.isArray(module.keyPoints)) keyPointCount += module.keyPoints.length;

      const text = String(module.fullText || module.content || '').replace(/<[^>]*>/g, ' ');
      const words = text.match(/\S+/g) || [];
      totalWords += words.length;
      if (words.length < 120) errors.push(`Module ${id} appears too short (${words.length} words).`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(JSON.stringify({
  chapters: data.chapters.length,
  modules: moduleCount,
  modulesWithFullText: fullTextCount,
  keyPoints: keyPointCount,
  words: totalWords,
  avgWords: Math.round(totalWords / moduleCount)
}, null, 2));
