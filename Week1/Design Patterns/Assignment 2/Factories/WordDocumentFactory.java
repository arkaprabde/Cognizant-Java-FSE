package Factories;

import Docs.Document;
import Docs.WordDocument;

public class WordDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}