class CustomPromise {
  constructor(handler) {
    this.status = "pending";
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn(value));
      }
    };

    const reject = (value) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.value = value;
        this.onRejectedCallbacks.forEach((fn) => {
          if (fn) {
            fn(value);
          } else {
            throw Error(value);
          }
        });
      }
    };

    try {
      handler(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === "pending") {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }

    if (this.status === "fulfilled") {
      onFulfilled(this.value);
    }

    if (this.status === "rejected") {
      onRejected(this.value);
    }
  }
  static all(promises) {
    return new CustomPromise((resolve, reject) => {
      let count = 0;
      let result = [];
      promises.forEach((promise, index) => {
        promise.then((res) => {
          result[index] = res;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        });
      });
    });
  }
}

// testing code
const p3 = new CustomPromise((resolve, reject) => {
  setTimeout(() => resolve("resolved!"), 1000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject("rejected!"), 1000);
});

CustomPromise.all([p3, p4]).then((res) => {
  console.log("wwqvwr", res);
});

p4.then((res) => {
  console.log(res);
});

// create custom promise

// class Promisew {
//   constructor(handler) {
//     this.status = "pending";
//     this.onFulfilledCallbacks = [];
//     this.onRejectedCallbacks = [];

//     const resolve = (value) => {
//       if (this.status === "pending") {
//         this.status = "fulfilled";
//         this.value = value;
//         this.onFulfilledCallbacks.forEach((fn) => fn(value));
//       }
//     };

//     const reject = (value) => {
//       if (this.status === "pending") {
//         this.status = "rejected";
//         this.value = value;
//         this.onRejectedCallbacks.forEach((fn) => {
//           if (fn) {
//             fn(value);
//           } else {
//             throw Error(value);
//           }
//         });
//       }
//     };

//     try {
//       handler(resolve, reject);
//     } catch (err) {
//       reject(err);
//     }
//   }

//   then(onFulfilled, onRejected) {
//     if (this.status === "pending") {
//       this.onFulfilledCallbacks.push(onFulfilled);
//       this.onRejectedCallbacks.push(onRejected);
//     }

//     if (this.status === "fulfilled") {
//       onFulfilled(this.value);
//     }

//     if (this.status === "rejected") {
//       onRejected(this.value);
//     }
//   }
//   static all(promises) {
//     return new Promise((resolve, reject) => {
//       let count = 0;
//       let result = [];
//       promises.forEach((promise, index) => {
//         promise.then((res) => {
//           result[index] = res;
//           count++;
//           if (count === promises.length) {
//             resolve(result);
//           }
//         });
//       });
//     });
//   }
// }

function t() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("resolved!");
    }, 1001);
  });
}

const a = t();

a.then((e) => {
  console.log("*******", e);
}).catch((e) => {
  console.log("*******", e);
});

Array.prototype.myFilter = function (cb) {
  let result = [];
  this.forEach((item) => {
    if (cb(item)) {
      result.push(item);
    }
  });

  return result;
};

console.log([1, 2, 3, 4, 5].myFilter((item) => item % 2 === 0));
