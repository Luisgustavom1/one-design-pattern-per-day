import { Command } from "./Command";

/**
 * Some commands can implement simple operations on their own.
 */
export class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  execute(): void {
    console.log(`SimpleCommand: I can do simple things like printing (${this.payload})`)
  }
}