// Backend logic
export function Entry (title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.checkVowels = function() {
  const vowels = ['a', 'i', 'e', 'o', 'u'];
  let pickVowels = [];
  for (let letter of this.body) {
    if(vowels.includes(letter) === true) {
      pickVowels.push(letter);
      return pickVowels.length;
    }
  }
  return pickVowels.length;
};

Entry.prototype.checkConsonants = function() {
  const vowels = ['a', 'i', 'e', 'o', 'u'];
  let pickConsonants = [];
  for (let letter of this.body) {
    if(vowels.includes(letter) === false) {
      pickConsonants.push(letter);
    }
  }
  return pickConsonants.length;
};
