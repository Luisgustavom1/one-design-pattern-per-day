import { Notifier } from "./Notifier";
import { FacebookDecorator } from "./decorators/FacebookDecoratos";
import { SlackDecorator } from "./decorators/SlackDecorator";
import { SmsDecorator } from "./decorators/SmsDecorator";

let notifier = new Notifier();

const facebookEnabled = Math.random() >= 0.5;
if (facebookEnabled) {
  notifier = new FacebookDecorator(notifier);
}

const slackEnabled = Math.random() >= 0.5;
if (slackEnabled) {
  notifier = new SlackDecorator(notifier);
}

const smsEnabled = Math.random() >= 0.5;
if (smsEnabled) {
  notifier = new SmsDecorator(notifier);
}

notifier.send("My notification!!");