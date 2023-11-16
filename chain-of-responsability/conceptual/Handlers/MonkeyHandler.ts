import { AbstractHandler } from "./AbstractHandler";

export class MonkeyHandler extends AbstractHandler {
  public handle(req: string) {
    if (req === "banana") {
      return `Monkey: I'll eat the ${req}`;
    }

    return super.handle(req); 
  }
}