public class PatternMatching {

    static void identifyType(Object obj) {
        String result = switch (obj) {
            case Integer i -> "Object is an Integer with value: " + i;
            case String s -> "Object is a String with value: " + s;
            case Double d -> "Object is a Double with value: " + d;
            case null -> "Object is null";
            default -> "Object is of unknown type: " + obj.getClass().getName();
        };
        System.out.println(result);
    }

    public static void main(String[] args) {
        identifyType(42);
        identifyType("Hello, Java 21!");
        identifyType(3.14);
        identifyType(null);
        identifyType(true);
    }
}
