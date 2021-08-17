{
  function addVowel(vowel, arrayVowel) {
    // this function checks if the vowel has already been scanned so there are no repetitions.
    var found = false;
    var counter = 0;
    while (found == false) {
      {
        if (counter == arrayVowel.length) {
          arrayVowel.push(vowel);
          return;
        }

        if (vowel === arrayVowel[counter]) found = true;
        else ++counter;
      }
    }
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

    for (var i = 0; i < vowelList.length; i++) {
      if (i == vowelList.length - 1) vowels = vowels + vowelList[i] + ".";
      else vowels = vowels + vowelList[i] + ", ";
    }
    console.log("Input: " + word + " Output: Vowels " + vowels);
  }
  // printVowels('"Umuzi"');
}
