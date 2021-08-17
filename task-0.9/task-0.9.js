{
  function addVowel(vowel, arrayVowel) {
    // this function checks if the vowel has already been scanned so there are no repetitions.
    var found = false;
    var counter = 0;
    while (found == false) {
      if (counter == arrayVowel.length) {
        arrayVowel.push(vowel);
        return;
      }

      if (vowel === arrayVowel[counter]) found = true;
      else ++counter;
    }
  }

  function buildOutput(arrayList) {
    var vowels = "";
    for (var i = 0; i < arrayList.length; i++) {
      if (i == arrayList.length - 1) vowels = vowels + arrayList[i] + ".";
      else vowels = vowels + arrayList[i] + ", ";
    }
    return vowels;
  }

  function printVowels(word) {
    var vowelList = [];
    var vowels = "";
    for (var i = 0; i < word.length; i++) {
      switch (word[i]) {
        case "u":
        case "e":
        case "i":
        case "o":
        case "a":
          addVowel(word[i], vowelList); // Check the funtion above for description
          break;
        case "A":
          addVowel("a", vowelList);
          break;
        case "U":
          addVowel("u", vowelList);
          break;
        case "I":
          addVowel("i", vowelList);
          break;
        case "E":
          addVowel("e", vowelList);
          break;
        case "O":
          addVowel("o", vowelList);
          break;
      }
    }
    console.log("Input: " + word + " Output: Vowels " + buildOutput(vowelList));
  }
  //printVowels('"Umuzi"');
}
