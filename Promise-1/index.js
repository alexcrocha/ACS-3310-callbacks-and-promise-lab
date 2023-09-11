// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('>>> Success! <<<');
    reject("--- Oops ---");
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// When the promise is rejected we get the error message that we passed to the reject function.
// The .catch method is called and the error message is logged to the console.
// **2)** What happens when you call both `resolve` and `reject`? Test this.
// The first one called is the one that is executed.
// **3)** Does the order matter you call resolve and reject matter? Test this.
// Yes.
// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// Only the first one called is executed.
