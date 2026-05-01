// cert.js - Lógica para generación de Certificados PDF con pdf-lib

export async function generateAndDownloadCertificate(userName, completionsCount) {
  try {
    // Verificar si pdf-lib está cargado
    if (!window.PDFLib) {
      throw new Error("La librería PDFLib no está cargada.");
    }

    const { PDFDocument, rgb, StandardFonts } = window.PDFLib;
    
    // Ruta a la plantilla copiada
    const TEMPLATE_URL = '/jsweb/assets/Certificado.pdf';
    
    const response = await fetch(TEMPLATE_URL);
    if (!response.ok) throw new Error("No se pudo cargar la plantilla del certificado.");
    const existingPdfBytes = await response.arrayBuffer();

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Colores
    const colorName = rgb(0.0, 0.65, 0.80); // Electric Cyan Cool
    const colorText = rgb(0.25, 0.25, 0.25);
    const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();

    // 1. NOMBRE DEL ALUMNO
    const nombreCompleto = userName.toUpperCase();
    const maxNombreWidth = width * 0.8;
    
    let nombreSize = 42;
    let nombreWidth = fontBold.widthOfTextAtSize(nombreCompleto, nombreSize);
    
    while (nombreWidth > maxNombreWidth && nombreSize > 20) {
        nombreSize -= 1;
        nombreWidth = fontBold.widthOfTextAtSize(nombreCompleto, nombreSize);
    }
    
    firstPage.drawText(nombreCompleto, {
        x: (width - nombreWidth) / 2,
        y: 330, // Subido ~0.5 cm
        size: nombreSize,
        font: fontBold,
        color: colorName,
    });

    // 2. DETALLES DE HORAS Y EVALUACIÓN
    const horasEstimadas = Math.max(10, Math.floor(completionsCount * 1.5));
    const detallesText = `${horasEstimadas} horas de estudio, ${completionsCount} módulos y evaluaciones de nivel con 90% de calificaciones promedio aprobatorias.`;
    const detallesSize = 11.5;
    const detallesWidth = fontItalic.widthOfTextAtSize(detallesText, detallesSize);
    
    firstPage.drawText(detallesText, {
        x: (width - detallesWidth) / 2,
        y: 186, // Subido ~0.2 cm
        size: detallesSize,
        font: fontItalic,
        color: colorText,
    });

    // 3. FECHA (Sobre la línea de FECHA)
    const date = new Date();
    const fechaText = date.toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
    const fechaSize = 13;
    const fechaWidth = fontRegular.widthOfTextAtSize(fechaText, fechaSize);
    
    const leftLineCenterX = width * 0.25 + 30;
    firstPage.drawText(fechaText, {
        x: leftLineCenterX - (fechaWidth / 2),
        y: 159, // Bajado ~0.2 cm
        size: fechaSize,
        font: fontRegular,
        color: colorText,
    });

    // 4. INSTRUCTOR (Sobre la línea de INSTRUCTOR)
    const instructorText = "JóvenesSTEM Web Course";
    const instructorSize = 15;
    const instructorWidth = fontBold.widthOfTextAtSize(instructorText, instructorSize);
    
    const rightLineCenterX = width * 0.75 - 30;
    firstPage.drawText(instructorText, {
        x: rightLineCenterX - (instructorWidth / 2),
        y: 159, // Bajado ~0.2 cm
        size: instructorSize,
        font: fontBold,
        color: colorText,
    });

    // 5. FOLIO (Abajo centrado)
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const año = date.getFullYear();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const folioStr = `FOLIO: JS-${año}${mes}-${randomSuffix}`;
    
    const folioSize = 9;
    const folioWidth = fontRegular.widthOfTextAtSize(folioStr, folioSize);
    
    firstPage.drawText(folioStr, {
        x: (width - folioWidth) / 2, // Centrado abajo
        y: 105, // Justo encima del borde interior
        size: folioSize,
        font: fontRegular,
        color: rgb(0.6, 0.6, 0.6),
    });

    // GUARDAR Y DESCARGAR
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Certificado_JovenesSTEM_${userName.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  } catch (error) {
    console.error("Error al generar el certificado:", error);
    alert("Hubo un error al generar tu certificado. Por favor intenta de nuevo.");
  }
}
