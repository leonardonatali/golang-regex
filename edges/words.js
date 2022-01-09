let words = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log('words.match(/\\bdia\\w+/gi): ', words.match(/\bdia\w+/gi));
console.log('words.match(/\\w+dia\\b/gi): ', words.match(/\w+dia\b/gi));
console.log('words.match(/\\w+dia\\w+/gi): ', words.match(/\w+dia\w+/gi));
console.log('words.match(/\\bdia\\b/gi): ', words.match(/\bdia\b/gi));

words = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'
console.log('words.match(/\\bdia\\b/gi): ', words.match(/\bdia\b/gi));
console.log('words.match(/(\\S*)?dia(\\S*)?/gi): ', words.match(/(\S*)?dia(\S*)?/gi));
console.log('words.match(/([\\wÀ-ú-]*)?dia([\\wÀ-ú-]*)?/gi)', words.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi));
