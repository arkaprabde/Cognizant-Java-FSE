public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Keyboard", "Electronics"),
            new Product(104, "Phone", "Electronics"),
            new Product(105, "T-shirt", "Fashion")
        };

        Product result1 = SearchUtil.linearSearch(products, "Phone");
        if (result1 != null) {
            System.out.println("Linear Search Found: " + result1.productName);
        } else {
            System.out.println("Linear Search: Product not found");
        }

        Product result2 = SearchUtil.binarySearch(products, "Phone");
        if (result2 != null) {
            System.out.println("Binary Search Found: " + result2.productName);
        } else {
            System.out.println("Binary Search: Product not found");
        }
        /*
        Analysis:
        Big O Notation describes how the runtime of an algorithm grows relative to input size.
        Linear Search: Best case O(1), Average and Worst case O(n)
        Binary Search: Best case O(1), Average and Worst case O(log n)
        Linear search is suitable for small or unsorted datasets.
        Binary search is faster on large, sorted datasets.
        For an e-commerce platform with thousands of products, binary search is more efficient.
        */
    }
}
