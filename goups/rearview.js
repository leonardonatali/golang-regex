let text = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log('text.match(/<(\\w+)>.*<\\/\\1>/g):', text.match(/<(\w+)>.*<\/\1>/g));

text = 'Lentamente é mente muito lenta'
console.log('text.match(/(lenta)(mente).*\\2.*\\1/gi)', text.match(/(lenta)(mente).*\2.*\1/gi));
// To not store any reference, pass ?: at start of group 
console.log('text.match(/(?:lenta)(mente).*\\1/gi)', text.match(/(?:lenta)(mente).*\1/gi));
console.log('text.match(/(lenta)(mente)/gi)', text.match(/(lenta)(mente)/gi));
console.log('text.match(/(lenta)(mente)?/gi)', text.match(/(lenta)(mente)?/gi));
console.log('text.replace(/(lenta)(mente)/gi, "$2")', text.replace(/(lenta)(mente)/gi, "$2"));
console.log('text.replace(/(lenta)(mente)/gi, "ABC$2DEF")', text.replace(/(lenta)(mente)/gi, "ABC$2DEF"));

text = 'abcdefghijkll'
console.log('', text.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))