import { AbstractHandler } from "./AbstractHandler";

export class SquirrelHandler extends AbstractHandler {
  public handle(req: string) {
    if (req === "Nut") {
      return `Squirrel: I'll eat the ${req}`
    }

    super.handle(req);
  }
}