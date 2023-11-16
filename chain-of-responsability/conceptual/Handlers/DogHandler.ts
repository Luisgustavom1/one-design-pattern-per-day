import { AbstractHandler } from "./AbstractHandler";

export class DogHandler extends AbstractHandler {
  public handle(req: string) {
    if (req === "MeatBall") {
      return `Dog: I'll eat the ${req}`
    }

    super.handle(req);
  }
}