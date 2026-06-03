public class VirtualThreads {
    public static void main(String[] args) throws InterruptedException {
        long startTime = System.currentTimeMillis();

        Thread[] threads = new Thread[100000];
        for (int i = 0; i < 100000; i++) {
            final int threadNumber = i + 1;
            threads[i] = Thread.startVirtualThread(() ->
                System.out.println("Virtual Thread " + threadNumber + " is running.")
            );
        }

        for (Thread thread : threads) {
            thread.join();
        }

        long endTime = System.currentTimeMillis();
        System.out.println("All 100,000 virtual threads completed.");
        System.out.println("Total time: " + (endTime - startTime) + " ms");
    }
}
