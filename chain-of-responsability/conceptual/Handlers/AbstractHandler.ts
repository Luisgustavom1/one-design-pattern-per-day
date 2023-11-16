import { Handler } from "./Handler";

export abstract class AbstractHandler implements Handler {
  private nextHandler?: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(req: string): string | undefined {
    if (this.nextHandler) {
      return this.nextHandler.handle(req);
    }

    return;
  }
}