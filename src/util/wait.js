export default function (timeout) {
  return new Promise(resolve => {
    window.setTimeout(() => resolve(), timeout);
  });
}
