import { Notify } from "../Notify";
import { BaseDecorator } from "./BaseDecorator";

export class SlackDecorator extends BaseDecorator {
  constructor(wrappee: Notify) {
    super(wrappee);
  }

  send(message: string) {
    super.send(message);
    console.log(`Sending Slack: ${message}`);
  }
}