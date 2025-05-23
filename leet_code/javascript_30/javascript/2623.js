/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
      const key = args.toString()
      const cachedResult = cache.get(key);
      if(!cachedResult && cachedResult !== 0) {
        const result = fn(...args);
        cache.set(key, result);
        return result;
      }
      return cachedResult;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */