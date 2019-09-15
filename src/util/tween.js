export default function tween({ ...from }, to, distance) {
  for (const [name, value] of Object.entries(to)) {
    if (name in from) {
      if (typeof value === 'number' && typeof from[name] === 'number') {
        from[name] = from[name] + (value - from[name]) * distance;
      } else if (typeof value === 'object' && typeof from[name] === 'object') {
        from[name] = tween(from[name], value, distance);
      }
    } else {
      from[name] = value;
    }
  }
  return from;
}

tween.easeOut = function(from, to, distance) {
  return tween(from, to, Math.sin(distance * Math.PI / 2));
}

tween.easeIn = function(from, to, distance) {
  return tween(from, to, Math.sin((1 + distance) * Math.PI / 2));
}

tween.easeInOut = function(from, to, distance) {
  return tween(from, to, (-Math.cos(distance * Math.PI) + 1) / 2);
}
