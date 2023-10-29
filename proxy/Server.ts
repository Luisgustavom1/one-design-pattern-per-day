type Methods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
type Headers = Record<string, string>;

interface Server {
  request(method: Methods, headers: Headers): void
  close(): Promise<boolean>
}

export { Server, Methods, Headers }
