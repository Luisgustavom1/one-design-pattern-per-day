export abstract class Network {
  constructor(
    protected username?: string,
    protected password?: string,
  ) {}

  public async post(msg: string): Promise<boolean> {
    if (!this.username || !this.password) {
      throw new Error("Invalid parameters");
    }

    if (await this.logIn(this.username, this.password)) {
      const result = this.sendData(Buffer.from(msg));
      this.logOut();
      return result;
    }

    return false;
  }

  abstract logIn(username: string, password: string): Promise<boolean>;
  abstract sendData(data: Buffer): boolean;
  abstract logOut(): void;

  async simulateNetworkLatency() {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
  }
}