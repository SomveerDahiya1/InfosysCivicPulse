class BankAccount {

    private int balance = 10000;

    public synchronized void withdraw(String user, int amount) {

        System.out.println(user + " wants to withdraw ₹" + amount);

        if (balance >= amount) {

            System.out.println(user + " is processing...");

            try {
                Thread.sleep(2000);   // Simulate bank processing
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            balance -= amount;

            System.out.println(user + " successfully withdrew ₹" + amount);
            System.out.println("Remaining Balance = ₹" + balance);

        } else {

            System.out.println(user + " -> Insufficient Balance!");

        }

        System.out.println("--------------------------------");
    }
}

class Customer extends Thread {

    BankAccount account;
    int amount;

    Customer(BankAccount account, String name, int amount) {

        super(name);

        this.account = account;
        this.amount = amount;

    }

    @Override
    public void run() {

        account.withdraw(getName(), amount);

    }

}

public class Main {

    public static void main(String[] args) {

        BankAccount account = new BankAccount();

        Customer c1 = new Customer(account, "Somveer", 7000);
        Customer c2 = new Customer(account, "Rahul", 5000);

        c1.start();
        c2.start();

    }

}