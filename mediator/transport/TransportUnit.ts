export interface TransportUnit {
  arrive(): void;
  depart(): void;
  travel(): void;
  startEmbarkation(): void;
  startDisembarkation(): void;
}