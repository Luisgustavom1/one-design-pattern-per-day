interface Item {
  id: number;
  name: string;
}

interface UserStore {
  add: (item: Item) => void;
  get: (id: number) => void;
}

const _data: Array<Item> = [];

const UserStore: UserStore = {
  add: (item) => _data.push(item),
  get: (id) => _data.find(d => d.id === id),
}

Object.freeze(UserStore);

export default UserStore;