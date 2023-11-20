import { Notification } from "./contracts/Notification";

/**
 * Here's an example of the existing class that follows the Target interface.
 *
 * The truth is that many real apps may not have this interface clearly defined.
 * If you're in that boat, your best bet would be to extend the Adapter from one
 * of your application's existing classes. If that's awkward (for instance,
 * SlackNotification doesn't feel like a subclass of EmailNotification), then
 * extracting an interface should be your first step.
 */
export class EmailNotification implements Notification {
  constructor(
    private readonly adminEmail: string,
  ) {}

  send(title: string, message: string): void {
    console.log(`Sent email with title ${title} to '${this.adminEmail}' that says ${message}.\n`);
  }
}