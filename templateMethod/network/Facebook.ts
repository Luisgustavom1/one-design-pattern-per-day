import { Network } from "./Network";

export class Facebook extends Network {
  constructor(username: string, password: string) {
    super(username, password);
  }

  public async logIn(username: string, password: string) {
    console.log("Checking user's parameters");
    console.log("Name: " + this.username);
    console.log("Password: ", Array.from({ length: username.length }).fill("*").join(''))
    
    await this.simulateNetworkLatency();
    console.log("\nLogin success on Facebook\n");
    return true;
  }

  sendData(data: Buffer): boolean {
    const messagePosted = true;

    if (messagePosted) {
      console.log("Facebook message: " + data.toString());
      return true;
    }

    return false;
  }

  logOut(): void {
    console.log("\nUser " + this.username + " was logged out from facebook");
  }
}