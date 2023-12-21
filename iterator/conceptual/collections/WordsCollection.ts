import { AlphabeticalOrderIterator } from "../iterators/AlphabeticalOrderIterator";
import { Iterator } from "../iterators/Iterator";
import { Aggregator } from "./Agregator";

export class WordsCollection implements Aggregator {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  getIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this);
  }

  getReverseIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}