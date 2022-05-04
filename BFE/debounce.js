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
for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    debouncedFunction();
    throttledFunction();
  }, i);
}

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
