public class TypeCasting {
    public static void main(String[] args) {
        double decimalValue = 9.78;
        int castedToInt = (int) decimalValue;
        System.out.println("double value: " + decimalValue);
        System.out.println("After casting to int: " + castedToInt);

        int intValue = 42;
        double castedToDouble = (double) intValue;
        System.out.println("int value: " + intValue);
        System.out.println("After casting to double: " + castedToDouble);
    }
}
