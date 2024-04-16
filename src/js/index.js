Function.prototype.myApply = function (ctx, arr) {
  if (!Array.isArray(arr)) throw new TypeError('Second arg must be an array');
  ctx.func = this;
  const res = ctx.func(...arr);
  delete ctx.func;
  return res;
};

const user = {
  name: 'Serhii',
  age: 22,
};

const greet = function (sex, greet) {
  return `${greet}! ${sex}. ${this.name} ${this.age}`;
};

const myApply = greet.myApply(user, ['Mrr', 'Hello from myBind']);
console.log(myApply);
