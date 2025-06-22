package Factories;

import Docs.Document;
import Docs.ExcelDocument;

public class ExcelDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new ExcelDocument();
    }
}