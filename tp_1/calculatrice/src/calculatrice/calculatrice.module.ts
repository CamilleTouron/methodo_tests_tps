import { Module } from '@nestjs/common';
import { CalculatriceService } from './calculatrice.service';

enum InteractionType {
  EXIT = '0',
  SOMME = '1',
  SOUSTRACTION = '2',
  MULTIPLICATION = '3',
  DIVISION = '4',
  EXPONENTIEL = '5',
}

@Module({
  providers: [CalculatriceService]
})
export class CalculatriceModule {
  constructor(private readonly calculatriceService: CalculatriceService) {
    console.log("Calculatrice service is running...");
    this.promptInteraction(); // Start the interaction loop
  }

  private displayMenu() {
    console.log("\n--- MENU ---");
    console.log(`${InteractionType.EXIT}: Exit`);
    console.log(`${InteractionType.SOMME}: Addition`);
    console.log(`${InteractionType.SOUSTRACTION}: Subtraction`);
    console.log(`${InteractionType.MULTIPLICATION}: Multiplication`);
    console.log(`${InteractionType.DIVISION}: Division`);
    console.log(`${InteractionType.EXPONENTIEL}: Exponentiation`);
    console.log("Enter your choice:");
  }

  private promptInteraction() {
    this.displayMenu();
    process.stdin.once('data', (data) => {
      const input = data.toString().trim();
      this.handleInteraction(input);
    });
  }

  private handleInteraction(input: string) {
    switch (input) {
      case InteractionType.EXIT:
        console.log("Exiting...");
        process.exit(0);
        break;
      case InteractionType.SOMME:
        this.handleSomme();
        break;
      case InteractionType.SOUSTRACTION:
        this.handleSoustraction();
        break;
      case InteractionType.MULTIPLICATION:
        this.handleMultiplication();
        break;
      case InteractionType.DIVISION:
        this.handleDivision();
        break;
      case InteractionType.EXPONENTIEL:
        this.handleExponentiel();
        break;
      default:
        console.log("Invalid option. Try again.");
        this.promptInteraction();
    }
  }

  private handleSomme() {
    console.log("Enter first number:");
    process.stdin.once('data', (data1) => {
      const a = parseFloat(data1.toString().trim());

      console.log("Enter second number:");
      process.stdin.once('data', (data2) => {
        const b = parseFloat(data2.toString().trim());

        const result = this.calculatriceService.somme(a, b);
        console.log(`Result: ${result}`);

        this.promptInteraction();
      });
    });
  }

  private handleSoustraction() {
    console.log("Enter first number:");
    process.stdin.once('data', (data1) => {
      const a = parseFloat(data1.toString().trim());

      console.log("Enter second number:");
      process.stdin.once('data', (data2) => {
        const b = parseFloat(data2.toString().trim());

        const result = this.calculatriceService.soustraction(a, b);
        console.log(`Result: ${result}`);

        this.promptInteraction();
      });
    });
  }

  private handleMultiplication() {
    console.log("Enter first number:");
    process.stdin.once('data', (data1) => {
      const a = parseFloat(data1.toString().trim());

      console.log("Enter second number:");
      process.stdin.once('data', (data2) => {
        const b = parseFloat(data2.toString().trim());

        const result = this.calculatriceService.multiplication(a, b);
        console.log(`Result: ${result}`);

        this.promptInteraction();
      });
    });
  }

  private handleDivision() {
    console.log("Enter dividend:");
    process.stdin.once('data', (data1) => {
      const a = parseFloat(data1.toString().trim());

      console.log("Enter divisor:");
      process.stdin.once('data', (data2) => {
        const b = parseFloat(data2.toString().trim());

        if (b === 0) {
          console.log("Error: Division by zero is not allowed.");
        } else {
          const result = this.calculatriceService.division(a, b);
          console.log(`Result: ${result}`);
        }

        this.promptInteraction();
      });
    });
  }

  private handleExponentiel() {
    console.log("Enter base:");
    process.stdin.once('data', (data1) => {
      const base = parseFloat(data1.toString().trim());

      console.log("Enter exponent:");
      process.stdin.once('data', (data2) => {
        const exponent = parseFloat(data2.toString().trim());

        const result = this.calculatriceService.exponention(base, exponent);
        console.log(`Result: ${result}`);

        this.promptInteraction();
      });
    });
  }
}
