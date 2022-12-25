function repeatingTranslate(sentence){
  words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if ( words[i].length < 3 ){
      continue;
    } else if (words[i].length >= 3){
      words[i] = translateWord(words[i]);
    }
  }
  sentence = words.join(" ");
  return sentence;
}

function translateWord(str){
  let vowels = 'aeiou';
  let chars = str.split("");
  // repeat word if last letter is vowel.
  if (vowels.includes(chars[chars.length-1])){
    str = chars.join("")
    str += str;
  } else {
    // add all letters following last vowel including the last vowel iteself
      for (let i = chars.length-1; i >= 0; i--) {
        if (vowels.includes(chars[i])) {
        str = chars.join("");
        str += str.slice(i);
        break;
        }
      }
    }
  return str;
}

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to
//go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot
//findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is
//my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily
//flewew to FranceFrance"
console.log("");
