import java.lang.reflect.Method;

public class ReflectionExample {

    static class MathOperations {
        public int add(int a, int b) {
            return a + b;
        }

        public int subtract(int a, int b) {
            return a - b;
        }
    }

    public static void main(String[] args) {
        try {
            Class<?> clazz = Class.forName("ReflectionExample$MathOperations");
            System.out.println("Class: " + clazz.getName());

            Method[] methods = clazz.getDeclaredMethods();
            System.out.println("Methods:");
            for (Method method : methods) {
                System.out.println(" - " + method.getName() + " | Parameters: " + method.getParameterCount());
            }

            Object instance = clazz.getDeclaredConstructor().newInstance();
            Method addMethod = clazz.getDeclaredMethod("add", int.class, int.class);
            int result = (int) addMethod.invoke(instance, 10, 5);
            System.out.println("Result of invoking add(10, 5): " + result);
        } catch (Exception e) {
            System.out.println("Reflection error: " + e.getMessage());
        }
    }
}
