public class BytecodeInspection {

    static int multiply(int a, int b) {
        return a * b;
    }

    public static void main(String[] args) {
        int result = multiply(6, 7);
        System.out.println("Result: " + result);
    }
}
