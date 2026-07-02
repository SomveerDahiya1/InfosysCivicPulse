import java.util.HashMap;

public class HashMapDemo {

    public static void main(String[] args) {

        HashMap<Integer, String> students = new HashMap<>();

        students.put(101, "Somveer");
        students.put(102, "Rahul");
        students.put(103, "Aman");

        for (Integer id : students.keySet()) {
            System.out.println(id + " -> " + students.get(id));
        }

    }
}