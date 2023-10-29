import { LoadBalancer, Methods, Headers } from "./LoadBalancer";
import { Server } from "./Server";

export class RoundRobinLoadBalancer implements LoadBalancer {
  private servers: Array<Server> = [];
  private currentServer: number = 0;

  constructor(urls: string[]) {
    for (const url of urls) {
      this.servers.push(new Server(url))
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