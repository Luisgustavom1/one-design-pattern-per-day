import { Command } from "./Command";

export class Invoker {
  private onStart: Command | undefined = undefined;
  private onFinish: Command | undefined = undefined;

  /**
   * 
   * Initialize commands.
   */
  public setOnStart(command: Command): void {
    this.onStart = command;
  }

  public setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  /**
   * The Invoker does not depend on concrete command or receiver classes. The
   * Invoker passes a request to a receiver indirectly, by executing a
   * command.
 */
  public doSomethingImportant(): void {
    console.log('Invoker: Does anybody want something done before I begin?\n');
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log('Invoker: ...doing something really important...');
    console.log('Invoker: Does anybody want something done after I finish?\n');
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  public isCommand(object: any): object is Command {
    return object?.execute !== undefined
  }
}