import { LeastConnectionLoadBalancer } from "./LeastConnectionLoadBalancer";
import { RoundRobinLoadBalancer } from "./RoundRobinLoadBalancer";

const servers = ["server1", "server2", "server3"]

const roundRobinLoadBalancer = new RoundRobinLoadBalancer(servers);
const leastConnectionLoadBalancer = new LeastConnectionLoadBalancer(servers);

roundRobinLoadBalancer.request("DELETE", {})
leastConnectionLoadBalancer.request("GET", {})
