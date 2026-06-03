import java.util.Scanner;

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter marks out of 100: ");
        int marks = scanner.nextInt();
        String grade;
        if(marks<=100 && marks>=0){
            if (marks >= 90) {
                grade = "A";
            } else if (marks >= 80) {
                grade = "B";
            } else if (marks >= 70) {
                grade = "C";
            } else if (marks >= 60) {
                grade = "D";
            } else {
                grade = "F";
            }
            System.out.println("Grade: " + grade);
        }
        else{
            System.out.println("Invalid marks entered. Please enter marks between 0 and 100.");
        }
        
        scanner.close();
    }
}
