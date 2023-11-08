import { Strategy } from "./Strategy";

export class Reverse implements Strategy {
  do(data: string[]): string[] {
    return data.reverse()
  } 
}