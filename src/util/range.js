export default (low, high) => [...(function * range (low, high) {
  if (high === undefined) {
    high = low;
    low = 0;
  } 

  for (; low < high; ++low) {
    yield low;
  }
})(low, high)];
