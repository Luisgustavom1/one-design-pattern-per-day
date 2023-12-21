import { Profile } from "../Profile";

// The collection interface must declare a factory method for
// producing iterators
export interface ProfileIterator {
  getNext(): Profile | undefined;
  hasMore(): boolean;
}
