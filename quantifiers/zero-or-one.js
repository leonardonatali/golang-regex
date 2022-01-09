const text = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const text2 = 'There is a big fog in NYC'

// ? => Zero or one of preceding char/group (optional)

const regex = /fogo?/gi

console.log('text.match(regex):', text.match(regex));
console.log('text2.match(regex):', text2.match(regex));
