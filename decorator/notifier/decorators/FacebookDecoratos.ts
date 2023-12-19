import { Notify } from "../Notify";
import { BaseDecorator } from "./BaseDecorator";

export class FacebookDecorator extends BaseDecorator {
  constructor(wrappee: Notify) {
    super(wrappee);
  }

  send(message: string) {
    super.send(message);
    console.log(`Sending Facebook: ${message}`);
  }
}