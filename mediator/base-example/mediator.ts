export enum MediatorEvents {
  A,
  B,
  C,
  D
}

export interface Mediator {
  notify(sender: object, event: MediatorEvents): void;
}