function throttle(timeMS, fn) {
  var timeout;
  return function () {
    var args = arguments;
    if (timeout) return;
    timeout = setTimeout(function () {
      timeout = null;
      fn.apply(null, args);
    }, timeMS);
  };
}

function debounce(timeMS, fn) {
  var timeout;
  return function () {
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn.apply(null, args);
    }, timeMS);
  };
}

function getsCalled() {
  console.log("gets debounce called");
}
function gettsCalled() {
  console.log("gets throttled called");
}
const debouncedFunction = customDebounce(getsCalled, 1000);
const throttledFunction = customThrottle(gettsCalled, 1000);
// for (let i = 0; i < 100; i++) {
//   setTimeout(() => {
//     debouncedFunction();
//     throttledFunction();
//   }, i);
// }

function customDebounce(fn, timeMS) {
  let timeout;
  return function () {
    let arg = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(null, arg);
    }, timeMS);
  };
}

function customThrottle(fn, timeMs) {
  let timeout = null;
  return function () {
    let arg = arguments;
    if (timeout) {
      return;
    }
    timeout = setTimeout(() => {
      fn.apply(null, arg);
      timeout = null;
    }, timeMs);
  };
}

function makeDebounce(fn, timeMS) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, ...arguments);
    }, timeMS);
  };
}

function test() {
  console.log("callled test");
}

function makeThrottle(fn, timeMS) {
  let timer;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(null, ...arguments);
    }, timeMS);
  };
}

// const debouncedTest = makeDebounce(test, 3000);
// for (let i = 0; i < 30; i++) {
//   debouncedTest();
// }
const throttledTest = makeThrottle(test, 1);
for (let i = 0; i < 300000; i++) {
  throttledTest();
}

class CustomPromise {
  constructor({ resolve, reject }) {}

  then() {}
  catch(err) {}
  finally() {}
}

function t() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let prob = Math.random() * 100;
      if (prob > 10) {
        resolve("resolving with prob : " + prob);
      } else {
        reject("rejecting with prob: " + prob);
      }
    });
  });
}

t()
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("done!"));
