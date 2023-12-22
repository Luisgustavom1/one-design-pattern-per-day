// The caretaker doesn't depend on the concrete memento class. 

import { Memento } from "./Memento";
import { Originator } from "./Originator";

// Therefore, it doesn't have access to the originator's state, stored inside the memento. It works with all mementos via the base memento interface.
export class Caretaker {
  private mementos: Memento[] = [];
  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  public backup(): void {
    console.log("\nCaretaker: Saving Originator's state...");
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (!this.mementos.length) {
      return;
    }

    const memento = this.mementos.pop();
    if (!memento) return;

    console.log(`Caretaker: Restoring state to: ${memento?.getName()}`);
    this.originator.restore(memento);  
  }

  public showHistory(): void {
    console.log("Caretaker: Here's the list of mementos:");
    for (const memento of this.mementos) {
      console.log(memento.getName());
    }
  }
}