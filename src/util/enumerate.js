export default (...keys) => {
  if(keys.indexOf('length') !== -1) {
    throw new Error('Cannot create an enumerator with key "length"');
  }
  let n = 0;
  const e = keys.reduce((e, key) => (e[key] = n++, e), {});
  e.length = n;
  e[Symbol.iterator] = function*() {
    for(var i of keys) {
      yield e[i];
    }
  };
  return e;
};
