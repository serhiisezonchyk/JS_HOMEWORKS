Function.prototype.myBind = function () {
  const [ctx, ...rest] = arguments;
  const newObj = structuredClone(ctx);
  newObj.func = this;
  return () => newObj.func(...rest);
};

const user = {
  name: 'Serhii',
  age: '22',
};

function greet(sex, greet) {
  return `${greet}! ${sex}. ${this.name}, you're ${this.age} years old.`;
}

const userWithGreet = greet.myBind(user, 'Mr', 'Hello from custom bind');
const data = userWithGreet();
console.log(data);
