import { TODOS_KEY } from './constants.js';
const Model = {
  _currentId: 1,

  getData() {
    const data = JSON.parse(localStorage.getItem(TODOS_KEY));
    if (data === null) {
      return [];
    }
    return data;
  },

  setData(data) {
    const savedData = this.getData();

    if (savedData.length > 150) {
      throw new Error('No capacity in DB!');
    }

    const dataToSave = { ...data, id: this.currentId };
    savedData.push(dataToSave);
    localStorage.setItem(TODOS_KEY, JSON.stringify(savedData));
    this.currentId += 1;

    return this.getData().at(-1);
  },

  removeData(id) {
    const savedData = this.getData();
    const index = savedData.findIndex((item) => {
      return Number(item.id) === Number(id);
    });

    const removedItem = savedData.splice(index, 1);
    localStorage.setItem(TODOS_KEY, JSON.stringify(savedData));

    const updatedData = this.getData();

    return !updatedData.some((item) => {
      return item.id === removedItem.id;
    });
  },
  removeAllData() {
    localStorage.removeItem(TODOS_KEY);
    const data = this.getData();
    return data.length === 0;
  },
  init() {
    const data = this.getData();
    if (!data.length) return;
    this.currentId = ++data.at(-1).id;
  },

  get currentId() {
    return this._currentId;
  },

  set currentId(val) {
    if (typeof val !== 'number') throw new Error('id should be a number');
    this._currentId = val;
  },
};

export default Model;
