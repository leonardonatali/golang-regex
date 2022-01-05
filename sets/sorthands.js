const text = `1,2,3,4,5,6,a.b c!d?e\r\f	-
f_g`

console.log('text.match(/\\d/g):', text.match(/\d/g)); //numbers: [0-9]
console.log('text.match(/\\D/g):', text.match(/\D/g)); //not-numbers: [^0-9]

console.log('text.match(/\\w/g):', text.match(/\w/g)); //chars: [a-zA-Z0-9_]
console.log('text.match(/\\W/g):', text.match(/\W/g)); //chars: [^a-zA-Z0-9_]

console.log('text.match(/\\s/g):', text.match(/\s/g)); //whitespaces
console.log('text.match(/\\S/g):', text.match(/\S/g)); //non-whitespaces

