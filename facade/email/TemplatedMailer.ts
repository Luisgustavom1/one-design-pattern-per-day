export interface TemplatedMailer {
  send(email: string, title: string, templateName: string): void;
}