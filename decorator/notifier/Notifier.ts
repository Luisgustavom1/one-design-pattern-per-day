import { Notify } from "./Notify";

export class Notifier implements Notify {
  send(message: string): void {
    console.log(message);
  }
}