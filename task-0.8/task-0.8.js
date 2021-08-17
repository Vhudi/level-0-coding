{
  function calculateTime(num) {
    var minute = num % 60;
    var hour = (num - minute) / 60; // the amount of times 60 fits in the parameter
    var minS = ""; // abitraty strings used to keep track of plurals
    var hrS = ""; // abitraty strings used to keep track of plurals
    if (minute != 1) minS = "s";
    if (hour != 1) hrS = "s";

    return hour + " hour" + hrS + ", " + minute + " minute" + minS + ".";
  }
  //console.log(calculateTime(61));
}
