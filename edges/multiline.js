const text = `
Lao é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log('text.match(/\n/g)', text.match(/\n/g));
console.log('', text.match(/^(\w).+\1$/gim));

