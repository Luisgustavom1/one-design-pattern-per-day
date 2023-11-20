import { SlackApi } from "../services/SlackApi";
import { Notification } from "./contracts/Notification";

/**
 * The Adapter is a class that links the Target interface and the Adaptee class.
 * In this case, it allows the application to send notifications using Slack
 * API.
 */
export class SlackNotification implements Notification {
  constructor(
    private readonly slack: SlackApi,
    private readonly chatId: string,
  ) {}
  
  send(title: string, message: string): void {
    const slackMessage = `#${title}#${message}`;
    this.slack.logIn();
    this.slack.sendMessage(this.chatId, slackMessage)
  }
}