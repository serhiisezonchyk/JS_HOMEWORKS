class Human {
  #name = null;
  #sex = null;
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  get name() {
    return this.#name;
  }
  set name(name) {
    if (typeof name !== 'string' || name.trim().length < 3) throw new Error('Name must me string!');
    this.#name = name;
  }

  get sex() {
    return this.#sex;
  }
  set sex(sex) {
    if (typeof sex !== 'string') throw new Error('Sex must me string');
    const trimmedSex = sex.trim().toLowerCase();
    if (trimmedSex !== 'male' && trimmedSex !== 'female') throw new Error('Sex should be "male" or "female"');
    this.#sex = trimmedSex;
  }
  static isHumam(obj) {
    return obj instanceof Human;
  }
}
export default Human;
