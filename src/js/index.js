Function.prototype.myBind = function () {
  const [ctx, ...rest] = arguments;
  ctx.bindingFunction = this;
  return () => ctx.bindingFunction(...rest);
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
