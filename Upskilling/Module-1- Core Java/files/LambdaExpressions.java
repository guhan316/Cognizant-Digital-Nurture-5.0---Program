import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class LambdaExpressions {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Mango", "Apple", "Banana", "Cherry", "Date");
        Collections.sort(names, (a, b) -> a.compareTo(b));
        System.out.println("Sorted list:");
        for (String name : names) {
            System.out.println(name);
        }
    }
}
