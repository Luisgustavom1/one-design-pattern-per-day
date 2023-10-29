import { LoadBalancer, Methods, Headers } from "./LoadBalancer";
import { Server } from "./Server";

export class LeastConnectionLoadBalancer implements LoadBalancer {
  private servers: Array<Server> = [];
  private currentServer: Server;

  constructor(urls: string[]) {
    for (const url of urls) {
      this.servers.push(new Server(url))
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