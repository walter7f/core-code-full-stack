class SmallestIntegerFinder {
    findSmallestInt(args) {
      var min=Math.min(...args);
      return min;
    }
  }


  // otra forma 
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = args[0];
      for(let i = 0; i< args.length; i++) {
        min = min < args[i] ? min : args[i]
      }
      return min;
    }
  }