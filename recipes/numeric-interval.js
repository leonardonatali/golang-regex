const numbers = '0 1 10 292 199 201 249 255 256 312 1010 1512'

console.log('numbers in [0...255]', numbers.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))
