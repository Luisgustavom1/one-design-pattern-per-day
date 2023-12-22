import { Memento } from "./Memento";

export class ConcreteMemento implements Memento {
  private date: string;
  constructor (
    private state: string,
    date?: string,
  ) {
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  getState(): string {
    return this.state;
  }

  getName(): string {
    return `${this.date} / (${this.state}...)`;
  }

  getDate(): string {
    return this.date;
  }
}