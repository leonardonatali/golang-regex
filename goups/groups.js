const text = 'José simão é muito engraçado... hehehehehe'
console.log('text.match(/(he)+/g):', text.match(/(he)+/g))

const urls = 'http://www.site.info www.escola.ninja.br google.com.ag'
console.log(
    'urls.match(/(http:\\/\\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g)',
    urls.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g)
);

