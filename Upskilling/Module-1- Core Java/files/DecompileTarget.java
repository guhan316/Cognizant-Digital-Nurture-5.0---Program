public class DecompileTarget {

    private int value;

    DecompileTarget(int value) {
        this.value = value;
    }

    int square() {
        return value * value;
    }

    public static void main(String[] args) {
        DecompileTarget obj = new DecompileTarget(5);
        System.out.println("Square: " + obj.square());
    }
}
