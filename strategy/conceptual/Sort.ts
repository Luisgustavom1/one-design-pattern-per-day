import { Strategy } from "./Strategy";

export class Sort implements Strategy {
  do(data: string[]): string[] {
    return data.sort()
  } 
}