import { Notify } from "../Notify";

export class BaseDecorator {
  constructor(private wrappee: Notify) {}

  send(message: string): void {
    this.wrappee.send(message);
  }
}