/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let lastVal = init;
    return {
        increment: () => {
            return lastVal += 1;
        },
        decrement: () => {
            return lastVal -= 1;
        },
        reset: () => {
            return lastVal = init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */