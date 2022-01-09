const text = 'O João recebeu 120 milhões apostando 6 9 21 23 45 56'

console.log('text.match(/\\d{1,2}/g)', text.match(/\d{1,2}/g));
console.log('text.match(/\\d{2}/g)', text.match(/\d{2}/g));
console.log('text.match(/\\d{1,}/g)', text.match(/\d{1,}/g));

console.log('text.match(/\\w{7}/g)', text.match(/\w{7}/g));
console.log('text.match(/\[\wõ]{7}/g)', text.match(/[\wõ]{7,}/g));