Promise.resolve().then(function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('1つめのPromise', new Date().toLocaleTimeString());
      resolve();
    }, 1000);
  });
}).then(function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('2つめのPromise', new Date().toLocaleTimeString());
      resolve();
    }, 1000);
  });
});