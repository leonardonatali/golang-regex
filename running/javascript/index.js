const text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
const regexNine = RegExp('9')

console.log('RegExp methods:');
console.log('test:', regexNine.test(text));
console.log('exec:', regexNine.exec(text));

console.log('-------');
const regexLetters = /[a-f]/g
console.log('String methods');
console.log('.match:', text.match(regexLetters));
console.log('.search:', text.search(regexLetters));
console.log('.replace:', text.replace(regexLetters, 'found!'));
console.log('.split:', text.split(regexLetters));
