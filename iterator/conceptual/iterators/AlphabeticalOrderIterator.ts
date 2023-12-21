import { WordsCollection } from "../collections/WordsCollection";
import { Iterator } from "./Iterator";

export class AlphabeticalOrderIterator implements Iterator<string> {
  constructor(
    private collection: WordsCollection,
    /**
    * This variable indicates the traversal direction.
    */
    private reverse: boolean = false,
    /**
     * Stores the current traversal position. An iterator may have a lot of
     * other fields for storing iteration state, especially when it is supposed
     * to work with a particular kind of collection.
    */
    private position: number = 0,
  ) {
    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  public rewind() {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }

  public current(): string {
    return this.collection.getItems()[this.position]!;
  }

  public key(): number {
    return this.position;
  }

  next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item!;
  }

  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }
    return this.position < this.collection.getCount();
  }
}