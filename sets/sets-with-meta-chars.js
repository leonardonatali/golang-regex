const text = '.$+*?-'

console.log('text.match(/[+.?*$]/):', text.match(/[+.?*$]/g));
console.log('text.match(/[$-?]/):', text.match(/[$-?]/g));
console.log('text.match(/[$\\-?]/):', text.match(/[$\-?]/g));
console.log('text.match(/[-?]/):', text.match(/[-?]/g));

// May need to be removed from sets: - [ ] ^