public class ThreadCreation {

    static class MessageThread implements Runnable {
        private String message;

        MessageThread(String message) {
            this.message = message;
        }

        @Override
        public void run() {
            for (int i = 1; i <= 5; i++) {
                System.out.println(message + " - Count: " + i);
            }
        }
    }

    public static void main(String[] args) {
        Thread thread1 = new Thread(new MessageThread("Thread 1: Hello from first thread"));
        Thread thread2 = new Thread(new MessageThread("Thread 2: Hello from second thread"));
        thread1.start();
        thread2.start();
    }
}
