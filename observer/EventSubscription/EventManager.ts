import { Listener } from "./Listeners/Listener"

export class EventManager<T extends string> implements Listener<T> {
  private listeners: Record<T, Array<Listener<T>>> = {} as Record<T, Array<Listener<T>>>

  constructor(...eventsType: T[]) {
    eventsType.forEach((eventType) => {
      this.listeners[eventType] = []
    })
  }

  subscribe(event: T, listener: Listener<T>) {
    this.listeners[event].push(listener);
  }

  unsubscribe(event: T, listener: Listener<T>) {
    this.listeners[event] =  this.listeners[event].filter(l => l === listener);
  }

  update(event: T, file: File) {
    for (const listener of this.listeners[event]) {
      listener.update(event, file);
    }
  }
}