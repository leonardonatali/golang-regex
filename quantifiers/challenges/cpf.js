const text = `CPF dos aprovados:
    - 314.900.588-42
    - 460.694.065-40`

console.log(text.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));
