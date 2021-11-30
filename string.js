const numberOfUniqueCharacters = (str) => {
  return new Set(str.split("")).size;
};

console.log(numberOfUniqueCharacters("hello"));
console.log(numberOfUniqueCharacters("abccde"));
console.log(numberOfUniqueCharacters("aaa"));
