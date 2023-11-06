export interface MailerTemplate {
  render(templateName: string): (title: string, email: string) => string;
}