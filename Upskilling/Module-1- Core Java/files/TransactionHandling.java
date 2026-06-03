import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

public class TransactionHandling {

    private static final String URL = "jdbc:sqlite:bank.db";

    static void transfer(int fromId, int toId, double amount) {
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(URL);
            conn.setAutoCommit(false);

            PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
            debit.setDouble(1, amount);
            debit.setInt(2, fromId);
            debit.executeUpdate();

            PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");
            credit.setDouble(1, amount);
            credit.setInt(2, toId);
            credit.executeUpdate();

            conn.commit();
            System.out.println("Transfer of " + amount + " from account " + fromId + " to account " + toId + " was successful.");
        } catch (Exception e) {
            System.out.println("Transaction failed: " + e.getMessage());
            try {
                if (conn != null) {
                    conn.rollback();
                    System.out.println("Transaction rolled back.");
                }
            } catch (Exception rollbackEx) {
                System.out.println("Rollback failed: " + rollbackEx.getMessage());
            }
        } finally {
            try {
                if (conn != null) conn.close();
            } catch (Exception ex) {
                System.out.println("Connection close error: " + ex.getMessage());
            }
        }
    }

    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(URL);
             Statement stmt = conn.createStatement()) {
            stmt.executeUpdate("CREATE TABLE IF NOT EXISTS accounts (id INTEGER PRIMARY KEY, name TEXT, balance REAL)");
            stmt.executeUpdate("INSERT OR IGNORE INTO accounts VALUES (1, 'Alice', 1000.0)");
            stmt.executeUpdate("INSERT OR IGNORE INTO accounts VALUES (2, 'Bob', 500.0)");
        } catch (Exception e) {
            System.out.println("Setup error: " + e.getMessage());
        }
        transfer(1, 2, 200.0);
    }
}
