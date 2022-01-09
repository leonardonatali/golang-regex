const text = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log('text.match(/r/gi):', text.match(/r/gi));
// ^ => start of the line
console.log('text.match(/^r/gi):', text.match(/^r/gi));

// ^ => end of the line
console.log('text.match(/r$/gi):', text.match(/r$/gi));

console.log('text.match(/^r.*r$/gis):', text.match(/^r.*r$/gis));
console.log('text.match(/^r[\\s\\S]r$/gi):', text.match(/^r[\s\S]*r$/gi));
