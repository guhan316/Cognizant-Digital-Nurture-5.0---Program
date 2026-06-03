Steps to compile and inspect bytecode using javap:

1. Compile:
   javac BytecodeInspection.java

2. Inspect bytecode:
   javap -c BytecodeInspection

Sample output explanation:
- iconst_6 / bipush: pushes integer constants onto the operand stack
- invokestatic: calls the static method multiply
- imul: multiplies the two integers on top of the stack
- ireturn: returns the integer result
- getstatic: retrieves the System.out field
- invokevirtual: calls println on the output stream
