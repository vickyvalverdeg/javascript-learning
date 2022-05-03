// function without ES6 syntax
var counter = function counter() => {
    var count = 0;
    return {
      getCount: function getCount() {
        return count;
      },
      increment: function increment() {
        count += 1;
      }
    };
  };

// function with ES6 syntax
const counter = () => {
    let count = 0;
    return {
      getCount: () => {
        return count;
      },
      increment: () => {
        return count += 1;
      }
    };
  };
console.log(counter().getCount())
console.log(counter().increment())