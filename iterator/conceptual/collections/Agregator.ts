import { Iterator } from "../iterators/Iterator";

// collection interface
export interface Aggregator {
  getIterator(): Iterator<string>;
}