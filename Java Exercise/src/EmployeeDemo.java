import java.util.ArrayList;

class Employee {

    int id;
    String name;

    Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    void display() {
        System.out.println(id + " " + name);
    }
}

public class EmployeeDemo {

    public static void main(String[] args) {

        ArrayList<Employee> employees = new ArrayList<>();

        employees.add(new Employee(101, "Somveer"));
        employees.add(new Employee(102, "Rahul"));

        for (Employee e : employees) {
            e.display();
        }

    }
}