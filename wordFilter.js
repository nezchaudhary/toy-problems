const WordFilter = function (words) {
  this.words = words.sort((a, b) => a.length - b.length));
};

WordFilter.prototype.f = function (prefix, suffix) {
  return this.words.reduceRight((index, word, i) => {
    if (word[0] === prefix && word[word.length - 1] === suffix) {
      index = i;
    }
    return index;
  }, undefined);
};

console.log()