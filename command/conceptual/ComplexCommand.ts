import { Command } from "./Command";
import { Receiver } from "./Receiver";

/**
 * Some commands can delegate more complex operations to other objects,
 * called "receivers."
 */
export class ComplexCommand implements Command {
  private readonly receiver: Receiver;

  /**
    * Context data, required for launching the receiver's methods.
  */
  private a: string;
  private b: string;

  constructor(
    receiver: Receiver, 
    a: string, 
    b: string
  ) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  /**
   * Commands can delegate to any methods of a receiver.
   */
  execute(): void {
    console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}