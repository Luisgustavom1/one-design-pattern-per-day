type Methods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
type Headers = Record<string, string>;

interface LoadBalancer {
  request(method: Methods, headers: Headers): void
  close(): Promise<boolean>
}

export { LoadBalancer, Methods, Headers }
