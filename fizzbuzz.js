const fb = [];

for (let i = 1; i <= 16; i++) {
	if (i%15 === 0) {
    fb.push('fizzbuzz');
  } else if (i%3 === 0) {
    fb.push('fizz');
  } else if (i%5 === 0) {
    fb.push('buzz');
  } else { fb.push(i); }
  
}
console.log(fb);