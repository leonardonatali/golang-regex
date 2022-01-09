const text = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

// groups cannot exists in sets
console.log('text.match(/[(abc)]/gi):', text.match(/[(abc)]/gi));

// sets can exists in groups
console.log('text.match(/([abc])/gi):', text.match(/([abc])/gi));
