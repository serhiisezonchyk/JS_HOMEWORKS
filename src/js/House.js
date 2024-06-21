import Apartment from './Apartment.js';

class House {
  #appartments = [];
  #appartmentCount = null;
  #currentAppertmentIndex = 0;

  constructor(count) {
    this.appartmentCount = count;
  }

  set appartmentCount(count) {
    if (typeof count !== 'number' || count < 1) throw new Error('Appartment count is invalid');
    this.#appartments = new Array(count).fill(null);
    this.#appartmentCount = count;
  }

  addAppartment(apartment) {
    if (!Apartment.isApartment(apartment)) throw new Error('You can add only apartment');
    if (this.#appartmentCount === this.#currentAppertmentIndex) throw new Error('House is full');
    this.#appartments[this.#currentAppertmentIndex] = apartment;
    this.#currentAppertmentIndex++;
  }
}

export default House;
