interface Item {
  id: number;
  name: string;
}

interface IUserStore {
  add: (item: Item) => void;
  get: (id: number) => void;
}

class UserStore implements IUserStore {
  #instance?: this;
  #_data: Array<Item> = [];

  constructor() {
    if (!this.#instance) {
      this.#instance = this;
    }

    return this.#instance;
  }

  add(item: Item) {
    this.#_data.push(item);
  };

  get(id: number) {
    return this.#_data.find((item) => item.id === id)
  };
}

const instance = new UserStore();
Object.freeze(instance);

export default instance;