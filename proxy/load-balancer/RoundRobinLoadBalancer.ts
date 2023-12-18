import { Methods, Headers, Server } from "./Server";
import { WebServer } from "./WebServer";

export class RoundRobinLoadBalancer implements Server {
  private servers: Array<WebServer> = [];
  private currentServer: number = 0;

  constructor(urls: string[]) {
    for (const url of urls) {
      this.servers.push(new WebServer(url))
    }
  }

  request(method: Methods, headers: Headers) {
    const server = this.servers[this.currentServer];
    if (!server) return;
    this.currentServer = (this.currentServer + 1) % this.servers.length;
    server.request(method, headers);
  }

  close(): Promise<boolean> {
    const server = this.servers[this.currentServer];
    if (!server) return Promise.resolve(false);
    return server.close();
  }
}