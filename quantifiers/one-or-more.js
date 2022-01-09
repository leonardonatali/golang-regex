const text = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const text2 = 'There is a big fog in NYC'

// + => One or more of preceding char/group

const regex = /fogo+/gi

console.log('text.match(regex):', text.match(regex));
console.log('text2.match(regex):', text2.match(regex));

const text3 = 'Os números: 0123456789'
console.log('text3.match(/[0-9]/g):', text3.match(/[0-9]/g));
console.log('text3.match(/[0-9]+/g):', text3.match(/[0-9]+/g));
