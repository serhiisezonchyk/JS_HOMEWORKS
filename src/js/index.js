Function.prototype.myApply = function (ctx, arr) {
  if (!Array.isArray(arr)) throw new TypeError('Second arg must be an array');
  ctx.bindingFunc = this;
  const res = ctx.bindingFunc(...arr);
  delete ctx.bindingFunc;
  return res;
};

const user = {
  name: 'Serhii',
  age: 22,
};

const greet = function (sex, greet) {
  return `${greet}! ${sex}. ${this.name} ${this.age}`;
};

const myApply = greet.myApply(user, ['Mr', 'Hello from myBind']);
console.log(myApply);
console.log(user)