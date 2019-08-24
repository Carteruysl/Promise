
//非同步
function doWork() {
  var auntie = "小四";
  (function () {
    console.log('1. 煮開水')
    setTimeout(function () {
      console.log('2. ' + auntie + '水滾了熄火動作');
    }, 0)
  })();
  (function () {
    console.log('3. 電話響了接聽');
  })();
}
doWork();   // 執行

//同步
function doWork() {
  var auntie = "小四";
  (function () {
    console.log('1. 煮開水')
    setTimeout(function () {
      console.log('2. ' + auntie + '水滾了熄火動作');
      (function () {
        console.log('3. 電話響了接聽');
      })();
    }, 0)
  })();
}
doWork();   // 執行

/*ES6上介紹promise函式
  -new Promise裡面包含
   -resolve:成功
   -reject:失敗
   使用Promise函示
   -then:接收成功的訊息
   -catch:接收失敗的訊息
*/
//1.
var runPromise = function (someone, timer, success) {
  console.log(someone + '開始奔跑');
  // Promise 從這開始
  return new Promise(function (resolve, reject) {
    if (success) {
      resolve(someone + '抵達終點');
    } else {
      reject(new Error(someone + '失敗'));
    }

  });
}
runPromise('小四', 5000, true);


//2.
var runPromise = function (someone, timer, success) {
  console.log(someone + '開始奔跑');
  // Promise 從這開始
  return new Promise(function (resolve, reject) {
    if (success) {
      resolve(someone + '抵達終點');
    } else {
      reject(new Error(someone + '失敗'));
    }

  });
}
runPromise('小四', 5000, true).then(function (response) {
  console.log(response)
}).catch(function (response) {
  console.log(response)
})



//3.
var runPromise = function (someone, timer, success) {
  console.log(someone + '開始奔跑');
  // Promise 從這開始
  return new Promise(function (resolve, reject) {
    if (success) {
      setTimeout(function () {                                 
        resolve(someone + ' ' + (timer / 1000) + '秒 抵達終點');
      }, timer);

    } else {
      reject(new Error(someone + '失敗'));
    }

  });
}
runPromise('小四', 5000, true).then(function (response) {
  console.log(response)
}).catch(function (response) {
  console.log(response)
})



//4.
var runPromise = function (someone, timer, success) {
  console.log(someone + '開始奔跑');
  // Promise 從這開始
  return new Promise(function (resolve, reject) {
    if (success) {
      setTimeout(function () {
        resolve(someone + ' ' + (timer / 1000) + '秒 抵達終點');
      }, timer);

    } else {
      reject(new Error(someone + '失敗'));
    }

  });
}
runPromise('小四', 5000, true).then(function (response) {
  console.log(response)
  return runPromise('胖虎', 3000, false);
}).then(function (response) {
  console.log(response)
}).catch(function (response) {
  console.log(response)
})