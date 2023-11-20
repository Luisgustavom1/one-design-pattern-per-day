/**
 * The Adaptee is some useful class, incompatible with the Target interface. You
 * can't just go in and change the code of the class to follow the Target
 * interface, since the code might be provided by a 3rd-party library.
 */
export class SlackApi {
  constructor(
    private readonly login: string,
    private readonly apiKey: string,
  ) {};

  logIn() {
    console.log(`Logged in to a slack account '${this.login}'.\n`);
  }

  sendMessage(chatId: string, message: string) {
    console.log(`Posted following message into the '${chatId}' chat: '${message}'.\n`);
  }
}