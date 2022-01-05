const text = 'ABC [abc] a-c 1234'

console.log('text.match(/[a-c]/g):', text.match(/[a-c]/g));
console.log('text.match(/a-c/g):', text.match(/a-c/g)); // Not defines a range
console.log('text.match(/[A-z]/g):', text.match(/[A-z]/g)); // Uses UNICODE order

//! console.log('text.match(/[a-Z]/g):', text.match(/[a-Z]/g));
//! console.log('text.match(/[4-1]/g):', text.match(/[4-1]/g));
