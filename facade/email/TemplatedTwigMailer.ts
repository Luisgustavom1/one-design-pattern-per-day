import { MailerTemplate } from "./MailerTemplate";
import { SwiftMailer } from "./SwiftMailer";
import { SwiftMessage } from "./SwiftMessage";
import { TemplatedMailer } from "./TemplatedMailer";

export class TemplatedTwigMailer implements TemplatedMailer {
  constructor(
    private readonly mailer: SwiftMailer,
    private readonly twig: MailerTemplate,
  ) {}
  
  send(email: string, title: string, templateName: string): void {
    const swiftMessage = new SwiftMessage(title, this.twig.render(templateName));
    const message = swiftMessage.setTo(email);
    this.mailer.send(message);
  }
}