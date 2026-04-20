import Foundation
import Quartz

let url = URL(fileURLWithPath: CommandLine.arguments[1])
if let pdf = PDFDocument(url: url) {
    if let text = pdf.string {
        print(text)
    }
}
