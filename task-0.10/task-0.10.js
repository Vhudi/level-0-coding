{
  function addCharacter(letter, arrayCommon) {
    // this function checks if the character has already been added so there are no repetitions.
    var found = false;
    var count = 0;
    while (found == false) {
      if (count == arrayCommon.length) {
        arrayCommon.push(letter);
        return;
      }

      if (letter === arrayCommon[count]) found = true;
      else ++count;
    }
  }

  function buildWordsInCommon(arrayCommon) {
    var output = "";
    for (var i = 0; i < arrayCommon.length; i++)
      if (i == arrayCommon.length - 1) output = output + arrayCommon[i] + ".";
      else output = output + arrayCommon[i] + ", ";
    return output;
  }

  function compareWords(baseWord, compareWord) {
    var shortWord;
    var longWord;
    var charInCommon = [];
    var output = "";
    if (baseWord.length > compareWord.length) {
      longWord = baseWord;
      shortWord = compareWord;
    } else {
      longWord = compareWord;
      shortWord = baseWord;
    }

    for (var i = 0; i < longWord.length; i++) {
      for (var j = 0; j < shortWord.length; j++)
        if (longWord[i] === shortWord[j]) {
          addCharacter(shortWord[j], charInCommon);
        }
    }

    console.log(
      "Input: '" +
        baseWord +
        ", " +
        compareWord +
        "' Output: Common letters- '" +
        buildWordsInCommon(charInCommon) +
        "'"
    );
  }
  //compareWords("house", "computers");
}