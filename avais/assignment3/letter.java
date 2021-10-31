import java.util.Scanner;
public class letter {
   public static void main(String args[]) {

       
    String example = "/abc/def/ghfj.doc";

    Scanner sc=new Scanner(System.in);
    System.out.println("Enter Word");  
    String word=sc.nextLine();
    System.out.println("Enter Letter");  
    String letter=sc.nextLine();
    System.out.println(word.substring(word.lastIndexOf(letter) + 1));
   }
}