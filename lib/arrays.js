const genres = ['rock', 'pop', 'jazz', 'indie'];
console.log(genres);

// C-reate
genres.push('classical');
console.log(genres);

// R-ead
console.log(genres[1]);

// U-pdate
genres[0] = 'blues';
console.log(genres);

// D-elete
genres.splice(1, 1);
console.log(genres);
