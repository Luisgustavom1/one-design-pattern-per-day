export interface Handler {
  setNext(handler: Handler): Handler;
  handle(req: string): string | undefined;
}