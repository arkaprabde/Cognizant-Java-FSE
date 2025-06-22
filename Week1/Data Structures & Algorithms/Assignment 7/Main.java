public class Main {
    public static void main(String[] args) {
        double currentValue = 1000.0;
        double annualGrowthRate = 0.05;
        int years = 10;

        double resultRecursive = Forecast.predictFutureValue(currentValue, annualGrowthRate, years);
        System.out.println("Recursive Forecast: " + resultRecursive);

        double resultOptimized = Forecast.predictFutureValueOptimized(currentValue, annualGrowthRate, years);
        System.out.println("Optimized Forecast: " + resultOptimized);

        /*
        Analysis:
        The first recursion simplifies the problem by breaking it into subproblems.
        The time complexity of this method is O(n), where n is the number of years.
        Each recursive call does one multiplication and a recursive call for (n - 1) years.
        However, this can lead to excessive stack usage for large n and is not efficient.
        
        The second recursion simplifies the problem by breaking it into smaller subproblems, which are less in number than the previous function.
        The time complexity of this method is O(log(n)), where n is the number of years.
        Each recursive call does two multiplications and a recursive call for (n / 2) years.
        This leads to efficient stack usage for large n.
        */
    }
}