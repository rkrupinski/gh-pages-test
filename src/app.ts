function identity<T>(arg: T): T {
  return arg;
}

document.body.innerText = identity('Hello, World!');
