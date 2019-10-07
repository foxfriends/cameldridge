export default {
  *[Symbol.iterator]() { while(true) yield Symbol(); },
  next() { return { value: Symbol(), done: false}; }
};
