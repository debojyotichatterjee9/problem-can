const timeLimit = function(fn, t) {
    
  return async function(...args) {
      const promise = [
  new Promise(resolve => resolve(fn(...args))),
  new Promise((resolve, reject) => setTimeout(() => reject('Time Limit Exceeded'), t))
 ] 
 return Promise.race(promise);
  }
};

/**
* const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
* limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
*/