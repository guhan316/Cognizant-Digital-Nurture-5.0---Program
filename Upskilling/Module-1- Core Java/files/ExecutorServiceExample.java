import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class ExecutorServiceExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(3);
        List<Future<Integer>> futures = new ArrayList<>();

        for (int i = 1; i <= 5; i++) {
            final int taskNumber = i;
            Callable<Integer> task = () -> {
                int result = taskNumber * taskNumber;
                System.out.println("Task " + taskNumber + " computed: " + result);
                return result;
            };
            futures.add(executor.submit(task));
        }

        System.out.println("Results:");
        for (Future<Integer> future : futures) {
            try {
                System.out.println("Result: " + future.get());
            } catch (Exception e) {
                System.out.println("Error retrieving result: " + e.getMessage());
            }
        }

        executor.shutdown();
    }
}
