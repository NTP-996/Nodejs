const axios = require('axios');
function a(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("a");
            resolve();
        }, 1002);
    });
}
function b(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("b");
            resolve();
        }, 1001);
    });
}
function c(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("c");
            resolve();
        }, 1000);
    });
}
var process = async () => {
    /*
    
    var res = await axios('https://jsonplaceholder.typicode.com/posts/1');
    console.log('--> posts 1')
    console.log(res.data);
    var res = await axios('https://jsonplaceholder.typicode.com/posts/1/comments');
    console.log('--> posts 1 comments')
    console.log(res.data);
    var res = await axios('https://jsonplaceholder.typicode.com/posts?userId=1');
    console.log('--> posts by user id 1')
    console.log(res.data);
    */

    /*
   await a();
   await b();
   await c();
   */
   await a().then(()=>b().then(()=>c()));
}

//process();

function thuc_day(i){
    return new Promise((resolve) => {
        var res = i * 2;
        resolve(res);
    })
}

function danh_rang(i){
    return new Promise((resolve) => {
        var res = i * 3
        resolve(res);
    })}

function di_an_sang(i){
    return new Promise((resolve) => {
        var res = i / 2;
        resolve(res);
    })}

// Code không tối ưu
async function main(){
    /*
    thuc_day(function(){
      danh_rang(function(){
        di_an_sang(function(){
          console.log('OMG!!!!');
        });
      });
    });
    */

    // promise
    /*
    thuc_day(2).then((result) => {
        console.log(result);
        danh_rang(result).then((result) => {
            console.log(result);
            di_an_sang(result).then((result) => {
                console.log(result);
            })
        });
    })
    */

    // async await
    var result = await thuc_day(2);
    console.log(result);
    result = await danh_rang(result);
    console.log(result);
    result = await di_an_sang(result);
    console.log(result);

}

main();