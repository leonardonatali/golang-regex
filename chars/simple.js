const text = '1,2,3,4,5,6,a.b c!d?e'

const regex = /,/

console.log('text.split(regex):', text.split(regex));
console.log('text.match(regex):', text.match(regex));

console.log('text.match(/,/g):', text.match(/,/g));
console.log('text.match(/A/g):', text.match(/A/g));
console.log('text.match(/A/gi):', text.match(/A/gi));
console.log('text.match(/2/g):', text.match(/2/g));
console.log('text.match(/b c!d/):', text.match(/b c!d/));
