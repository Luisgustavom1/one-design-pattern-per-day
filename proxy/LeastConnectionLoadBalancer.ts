import { Server, Methods, Headers } from "./Server";
import { WebServer } from "./WebServer";

export class LeastConnectionLoadBalancer implements Server {
  private servers: Array<WebServer> = [];
  private currentServer: WebServer;

  constructor(urls: string[]) {
    for (const url of urls) {
      this.servers.push(new WebServer(url))
    }

    this.currentServer = this.servers[0]
  }

  request(method: Methods, headers: Headers) {
    for (const server of this.servers) {
      if (server.getNumberOfConnections() < this.currentServer.getNumberOfConnections()) {
        this.currentServer = server
      }
    }

    this.currentServer?.request(method, headers);
  }

  close(): Promise<boolean> {
    return this.currentServer.close();
  }
}