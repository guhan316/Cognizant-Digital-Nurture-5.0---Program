public class InterfaceImplementation {

    interface Playable {
        void play();
    }

    static class Guitar implements Playable {
        @Override
        public void play() {
            System.out.println("Playing the Guitar.");
        }
    }

    static class Piano implements Playable {
        @Override
        public void play() {
            System.out.println("Playing the Piano.");
        }
    }

    public static void main(String[] args) {
        Playable guitar = new Guitar();
        guitar.play();

        Playable piano = new Piano();
        piano.play();
    }
}
