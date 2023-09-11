let userInput;
const food = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (userInput === 'pizza') {
      resolve('You\'re completely right! Pizza is the best!');
    } else {
      reject('No. Just no. Pizza is the best.');
    }
  }, 1000);
});

// resolve food here:


// **Challenge 1** Resolve your promise with the name of your favorite food.
// Do this by calling the `resolve` with an argument.

// **Challenge 2** Resolve the promise `food` with the `.then()` syntax
// and print your favorite food to the console.
userInput = 'pizza';

food.then((message) => {
  console.log(message);
}).catch((err) => {
  console.log(err);
});
