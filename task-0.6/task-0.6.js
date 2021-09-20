{
  function findMaxValue(...args) {
    // ...args is the native object that represents function arguments.
    var max = args[0];
    for (var i = 1; i < args.length; i++) {
      if (max < args[i]) max = args[i];
    }
    return max;
  }
}

console.log(findMaxValue(4, 5, 6, 77, 8));
