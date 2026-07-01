class Student {
    String name;

    Student(String name){
        this.name=name;
    }

    void display(){
        System.out.println("Name: "+name);
    }
}

public class OOPDemo {
    public static void main(String[] args){
        Student s1 = new Student("Somveer");
        s1.display();
    }
}