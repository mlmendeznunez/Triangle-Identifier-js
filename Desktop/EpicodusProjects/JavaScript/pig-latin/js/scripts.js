var translateToPigLatin = function(input_text){

  var textNoPunctuation = punctuationLess(input_text); //removes punctuation
  var wordArray = textNoPunctuation.split(" ");// splice text into word array

  var translatedWords = [];//saves words translated into pig-latin
  for (i = 0; i < wordArray.length; i++){ //scrolls through words in array
      var word = wordArray[i];

      if(doesWordStartWithVowel(word[0])){
        word = word + "yay"; //saves string into a variable
      } else {
        word = wordStartsWithConsonant(word);
      }
      translatedWords.push(word);
    }
    var finalTranslation = translatedWords.join(" "); //.replace only for strings .join creates one string out of an array
    return finalTranslation;
};

var doesWordStartWithVowel = function(firstchar) {
  return (/^[aeiou]$/i).test(firstchar); //true = firstChar is a vowel
};

var punctuationLess = function(phrase) {
  var textNoPunctuation = phrase.replace(/[^\w\s]|_/g, "").toLowerCase();
  return textNoPunctuation;
};

var phraseSplitter = function(phrase) {
  return phrase.split(" ");
}

var wordStartsWithConsonant = function(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var counter = 0;
  for (var index = 0; index <= word.length - 1; index++) { //.length = number of words -1 to account for index's counting at 0
    if (vowels.indexOf(word[index]) === -1) {
      counter++;
    } else {
      break;
    }
  }
  var firstConsonants = word.slice(0, counter);
  var restOfWord = word.slice(counter);
  return restOfWord + firstConsonants + "ay";
}


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) { //#id on html
    var input_text = $("input#text").val();
    var result = translateToPigLatin(input_text);

    $(".pigLatin").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
