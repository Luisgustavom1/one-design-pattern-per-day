import { Server, Methods, Headers } from "./Server";

export class WebServer implements Server {
  private numberOfConnections: number;

  constructor(
    readonly url: string
  ) {
    this.numberOfConnections = 0;
  }

  request(method: Methods, headers: Headers) {
    console.log("Receive the request ", method, headers);
    this.numberOfConnections++
  }

  close(): Promise<boolean> {
    console.log("Closing connection...")
    this.numberOfConnections--
    return new Promise(() => true)
  }

  getNumberOfConnections() {
    return this.numberOfConnections;
  }
}