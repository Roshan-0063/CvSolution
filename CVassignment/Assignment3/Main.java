
import java.util.*;
public class Main
{
	public static void main(String[] args) {
	    
	      int i = 0;

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Sentence: ");
        String str = scanner.nextLine();
        System.out.print("Enter a Letter: ");
        char letter = scanner.next().charAt(0);
        

        for (i = 0; i < str.length(); i++) {
            if (str.charAt(i) == letter) {
                break;
            }
        }
        if (i < str.length() - 1) {
            System.out.print(str.substring(i + 1));
        } else {
            System.out.print("Sorry! Letter is Not aviable ");
        }
    }
		
	
}
