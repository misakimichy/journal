// Backend logic
export function Entry (body, letters, inputBody) {
  this.body = body;
  this.letters = letters;
  this.inputBody = inputBody;
}

Entry.prototype.checkVowels = function() {
  const vowels = ['a', 'i', 'e', 'o', 'u'];
  let pickVowels = [];
  for (let letter of this.letters) {
    if(vowels.includes(letter) === true) {
      pickVowels.push(letter);
    }
  }
  return pickVowels.length;
};

Entry.prototype.checkConsonants = function() {
  const vowels = ['a', 'i', 'e', 'o', 'u'];
  let pickConsonants = [];
  for (let letter of this.letters) {
    if(vowels.includes(letter) === false) {
      pickConsonants.push(letter);
    }
  }
  return pickConsonants.length;
};

Entry.prototype.getTeaser = function() {
  let first8 = [];
  if(this.body.length > 8) {
    for(let i = 0; i <= 8 ; i++) {
      first8.push(this.body[i]);
    }
    return first8.join(' ');
  } else {
    return this.inputBody;
  }
};