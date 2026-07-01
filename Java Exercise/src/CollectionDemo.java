import java.util.ArrayList;

public class CollectionDemo {
    public static void main(String[] args){

        ArrayList<String> skills = new ArrayList<>();

        skills.add("Java");

        skills.add("Spring Boot");

        skills.add("React");

        System.out.println("Skills:");

        for(String skill:skills){
            System.out.println(skill);
        }
    }
}