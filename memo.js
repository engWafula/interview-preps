const memoizeOne = (fn) => {
    const cache = {};
    return (...args) => {
      const key = JSON.stringify(args);
      console.log("am key",key)
      if (cache[key]) {
        console.log('cache');
        return cache[key];
      } else {
        console.log('not cache');
        const result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
  };
  
  const add = (a, b) => a + b;
  
  const memoizedAdd = memoizeOne(add);
  
  console.log(memoizedAdd(1, 4)); // Output: not cache, 5
  console.log(memoizedAdd(1, 4)); // Output: cache, 5
  