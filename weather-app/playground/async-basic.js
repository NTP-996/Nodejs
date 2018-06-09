console.log('Start');

setTimeout(() => {console.log('callback')}, 2000);
setTimeout(() => {console.log('second callback')},0);

console.log('End');