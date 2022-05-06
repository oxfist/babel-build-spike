const num = 3;

async function sayHelloAfter(seconds) {
  setTimeout(() => {
    console.log("Hello")
  }, seconds * 1000);
}

sayHelloAfter(num);
