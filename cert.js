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

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();

    // 1. NOMBRE DEL ALUMNO
    const nombreCompleto = userName.toUpperCase();
    const nombreYPosition = height - 350;
    const maxNombreWidth = width * 0.85;
    
    let nombreSize = 45;
    let nombreWidth = fontBold.widthOfTextAtSize(nombreCompleto, nombreSize);
    
    // Ajustar tamaño si es muy largo
    while (nombreWidth > maxNombreWidth && nombreSize > 20) {
        nombreSize -= 1;
        nombreWidth = fontBold.widthOfTextAtSize(nombreCompleto, nombreSize);
    }
    
    firstPage.drawText(nombreCompleto, {
        x: (width - nombreWidth) / 2,
        y: nombreYPosition,
        size: nombreSize,
        font: fontBold,
        color: rgb(0, 0, 0),
    });

    // 2. INSTRUCTOR / CURSO
    const eventoText = "JóvenesSTEM Web Course";
    const eventoSize = 14;
    const baseColor = rgb(0.3, 0.3, 0.3);
    const maxEventoWidth = width * 0.8;
    
    const startText = 'Por completar exitosamente: ';
    const startWidth = fontRegular.widthOfTextAtSize(startText, eventoSize);
    const eventoWidth = fontBold.widthOfTextAtSize(eventoText, eventoSize);
    const totalWidth = startWidth + eventoWidth;
    let yEventoPosition = height - 395;
    
    let currentX = (width - totalWidth) / 2;
    
    firstPage.drawText(startText, {
        x: currentX,
        y: yEventoPosition,
        size: eventoSize,
        font: fontRegular,
        color: baseColor,
    });
    currentX += startWidth;
    
    firstPage.drawText(eventoText, {
        x: currentX,
        y: yEventoPosition,
        size: eventoSize,
        font: fontBold,
        color: baseColor,
    });

    // 3. DETALLES DE HORAS Y EVALUACIÓN
    const horasEstimadas = Math.max(10, Math.floor(completionsCount * 1.5)); // Aproximación
    const detallesText = `${horasEstimadas} horas de estudio, 213 módulos y evaluaciones de nivel con 90% de calificaciones promedio aprobatorias.`;
    const detallesSize = 11;
    const detallesWidth = fontRegular.widthOfTextAtSize(detallesText, detallesSize);
    
    firstPage.drawText(detallesText, {
        x: (width - detallesWidth) / 2,
        y: height - 425,
        size: detallesSize,
        font: fontRegular,
        color: rgb(0.4, 0.4, 0.4),
    });

    // 4. FOLIO (Simulado por ahora basado en la fecha y random)
    const date = new Date();
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const año = date.getFullYear();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const folioStr = `FOLIO: JS-${año}${mes}-${randomSuffix}`;
    
    const folioSize = 10;
    const folioWidth = fontRegular.widthOfTextAtSize(folioStr, folioSize);
    
    // Dibujar en la esquina inferior izquierda o centrado abajo
    firstPage.drawText(folioStr, {
        x: (width - folioWidth) / 2,
        y: 50, // Cerca del borde inferior
        size: folioSize,
        font: fontRegular,
        color: rgb(0.6, 0.6, 0.6),
    });

    // 5. FECHA DE EMISIÓN
    const fechaEmision = `Fecha de emisión: ${date.toLocaleDateString('es-MX')}`;
    const fechaWidth = fontRegular.widthOfTextAtSize(fechaEmision, folioSize);
    firstPage.drawText(fechaEmision, {
        x: (width - fechaWidth) / 2,
        y: 35, // Justo debajo del folio
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
