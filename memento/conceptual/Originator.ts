// The Originator holds some important state that may change over time.

import { ConcreteMemento } from "./ConcreteMemento";
import { Memento } from "./Memento";

// It also defines a method for saving the state inside a memento and another
export class Originator {
  // for simplicity the state is a single variable
  private state: string;

  constructor(state: string) {
    this.state = state;
    console.log(`Originator: My initial state is: ${state}`);
  }

  // The Originator's business logic may affect its internal state.
  public doSomething(): void {
    console.log("Originator: I'm doing something important.");
    this.state = this.generateRandomString(30);
    console.log(`Originator: and my state has changed to: ${this.state}`);
  }

  private generateRandomString(length: number = 10): string {
    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Array.from({ length })
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join('');  
    }

  // save state inside a memento
  public save(): Memento {
    return new ConcreteMemento(this.state)
  }

  // restore state from memento
  public restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Originator: My state has changed to: ${this.state}`);
  }
}