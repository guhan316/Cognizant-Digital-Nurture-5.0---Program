import java.util.Scanner;

public class ArraySumAverage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of elements: ");
        int count = scanner.nextInt();
        double[] elements = new double[count];
        for (int i = 0; i < count; i++) {
            System.out.print("Enter element " + (i + 1) + ": ");
            elements[i] = scanner.nextDouble();
        }
        double sum = 0;
        for (double element : elements) {
            sum += element;
        }
        double average = sum / count;
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
        scanner.close();
    }
}
