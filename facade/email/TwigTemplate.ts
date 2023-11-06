import { MailerTemplate } from "./MailerTemplate";

export class TwigTemplate implements MailerTemplate {
  render(templateName: string) {
    switch (templateName) {
      default:
        return (title: string, email: string) => `${title} by ${email}\n\n<<${templateName}>>`
    }
  }
}