public class OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;
        System.out.println("10 + 5 * 2 = " + result1);
        System.out.println("Multiplication is performed before addition due to higher precedence.");

        int result2 = (10 + 5) * 2;
        System.out.println("(10 + 5) * 2 = " + result2);
        System.out.println("Parentheses override default precedence.");

        int result3 = 20 / 4 + 3 * 2 - 1;
        System.out.println("20 / 4 + 3 * 2 - 1 = " + result3);
        System.out.println("Division and multiplication are evaluated first, then addition and subtraction.");
    }
}
