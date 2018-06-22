// var asyncAdd = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a === 'number' && typeof b === 'number') {
//                 resolve(a + b);
//             } else {
//                 reject('Arguments must be numbers');
//             }
//         }, 1500);
//     });
// };

// asyncAdd(5, 7).then((res) => {
//     console.log('Result: ',res);
//     return asyncAdd(res, '33'); 
// }).then((res) => {
//     console.log('Should be 45',res);
// }).catch((errorMassage) => {
//     console.log(errorMassage);
// });





// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey. It worked!');
//         reject('Unable to fullfill promise');
//     },2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });

var doubleAfter2Seconds = (x) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }
  
 var addAsync = async(x) => {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
  }
  
  
  addAsync(10).then((sum) => {
    console.log(sum);
  });