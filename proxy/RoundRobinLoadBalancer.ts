import { LoadBalancer, Methods, Headers } from "./Server";
import { WebServer } from "./WebServer";

export class RoundRobinLoadBalancer implements LoadBalancer {
  private servers: Array<WebServer> = [];
  private currentServer: number = 0;

  constructor(urls: string[]) {
    for (const url of urls) {
      this.servers.push(new WebServer(url))
    }
  }

  request(method: Methods, headers: Headers) {
    const server = this.servers[this.currentServer];
    this.currentServer = (this.currentServer + 1) % this.servers.length;
    server.request(method, headers);
  }

  close(): Promise<boolean> {
    return this.servers[this.currentServer].close();
  }
}