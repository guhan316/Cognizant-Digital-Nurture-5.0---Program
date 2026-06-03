Steps to decompile a Java class file using CFR:

1. Compile the source:
   javac DecompileTarget.java

2. Download CFR decompiler (cfr.jar) from https://www.benf.org/other/cfr/

3. Decompile:
   java -jar cfr.jar DecompileTarget.class

The decompiled output will show the reconstructed Java source code from the bytecode,
including the class structure, constructor, and the square() method.

Alternatively, JD-GUI (https://java-decompiler.github.io/) can be used to open
the .class file visually.
