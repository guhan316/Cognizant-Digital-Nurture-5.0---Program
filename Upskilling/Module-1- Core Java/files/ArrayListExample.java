import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        String input;
        System.out.println("Enter student names (type 'done' to stop):");
        while (true) {
            System.out.print("Name: ");
            input = scanner.nextLine();
            if (input.equalsIgnoreCase("done")) {
                break;
            }
            names.add(input);
        }
        System.out.println("All student names:");
        for (String name : names) {
            System.out.println(name);
        }
        scanner.close();
    }
}
