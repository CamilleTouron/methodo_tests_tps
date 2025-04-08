import { Module } from '@nestjs/common';
import { CalculatriceService } from './calculatrice.service';

enum InteractionType {
  EXIT = '0',
  SOMME = '1',
  // More interaction types can be added here
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
}
