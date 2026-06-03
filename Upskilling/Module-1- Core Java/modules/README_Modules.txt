How to compile and run the Java Modules (Exercise 34):

Step 1 - Compile com.utils:
javac -d mods/com.utils modules/com.utils/module-info.java modules/com.utils/com/utils/Greeter.java

Step 2 - Compile com.greetings:
javac --module-path mods -d mods/com.greetings modules/com.greetings/module-info.java modules/com.greetings/com/greetings/Main.java

Step 3 - Run:
java --module-path mods -m com.greetings/com.greetings.Main
