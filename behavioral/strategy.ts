//This is the strategy design pattern.
//This is also a behavioral design pattern, that enables us to switch between objects at runtime.


// Define the strategy interface
interface PaymentStrategy {
    pay(amount: number): void;
  }
  
  // Concrete strategy implementations
  class CreditCardStrategy implements PaymentStrategy {
    pay(amount: number): void {
      console.log(`Paying ${amount} using a credit card.`);
    }
  }
  
  class PayPalStrategy implements PaymentStrategy {
    pay(amount: number): void {
      console.log(`Paying ${amount} using PayPal.`);
    }
  }
  
  class BankTransferStrategy implements PaymentStrategy {
    pay(amount: number): void {
      console.log(`Paying ${amount} using a bank transfer.`);
    }
  }
  
  // The context class
  class PaymentContext {
    private paymentStrategy: PaymentStrategy;
  
    setPaymentStrategy(strategy: PaymentStrategy): void {
      this.paymentStrategy = strategy;
    }
  
    pay(amount: number): void {
      this.paymentStrategy.pay(amount);
    }
  }
  
  // Usage example
  const paymentContext = new PaymentContext();
  
  paymentContext.setPaymentStrategy(new CreditCardStrategy());
  paymentContext.pay(100);
  // Output: Paying 100 using a credit card.
  
  paymentContext.setPaymentStrategy(new PayPalStrategy());
  paymentContext.pay(50);
  // Output: Paying 50 using PayPal.
  
  paymentContext.setPaymentStrategy(new BankTransferStrategy());
  paymentContext.pay(75);
  // Output: Paying 75 using a bank transfer.