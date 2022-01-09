const text = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// Greedy quantifiers
console.log('text.match(/<div>.+<\\/div>/g):', text.match(/<div>.+<\/div>/g));
console.log('text.match(/<div>.*<\\/div>/g):', text.match(/<div>.*<\/div>/g));
console.log('text.match(/<div>.{0,100}<\\/div>/g):', text.match(/<div>.{0,100}<\/div>/g));

// Not greedy quantifiers
console.log('text.match(/<div>.+?<\\/div>/g):', text.match(/<div>.+?<\/div>/g));
console.log('text.match(/<div>.*?<\\/div>/g):', text.match(/<div>.*?<\/div>/g));
console.log('text.match(/<div>.{0,100}?<\\/div>/g):', text.match(/<div>.{0,100}?<\/div>/g));
