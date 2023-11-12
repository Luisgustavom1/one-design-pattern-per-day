import { Command } from "./Interfaces/Command";

export class CommandHistory {
  private readonly history: Array<Command> = [];

  push(c: Command) {
    this.history.push(c);
  }

  pop() {
    return this.history.pop();
  }
}