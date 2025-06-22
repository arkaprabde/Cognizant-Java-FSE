public class Forecast {
    public static double predictFutureValue(double currentValue, double growthRate, int years) {
        if (years == 0)
            return currentValue;
        return predictFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static double predictFutureValueOptimized(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        double halfValue = predictFutureValueOptimized(1, growthRate, years / 2);
        if (years % 2 == 0) {
            return currentValue * halfValue * halfValue;
        }
        else {
            return currentValue * halfValue * halfValue * (1 + growthRate);
        }
    }
}