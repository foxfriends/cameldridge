export default function * divide(length, parts) {
  for (let i = 0; i < parts; ++i) {
    yield length / (parts - 1) * i;
  }
}
