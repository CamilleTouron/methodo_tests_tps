import { Module } from '@nestjs/common';
import { CalculatriceService } from './calculatrice.service';

enum InteractionType {
  EXIT = '0',
  SOMME = '1',
  SOUSTRACTION = '2',
  MULTIPLICATION = '3',
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

        this.promptInteraction(); // Continue the loop
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

        this.promptInteraction(); // Continue the loop
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

        this.promptInteraction(); // Continue the loop
      });
    });
  }
}
