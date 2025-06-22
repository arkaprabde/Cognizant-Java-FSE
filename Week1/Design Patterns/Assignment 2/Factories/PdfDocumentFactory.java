package Factories;

import Docs.Document;
import Docs.PdfDocument;

public class PdfDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new PdfDocument();
    }
}