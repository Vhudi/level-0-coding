{
  function calculateTime(num) {
    var minute = num % 60;
    var hour = (num - minute) / 60;
    var minS = "";
    var hrS = "";
    if (minute != 1) minS = "s";
    if (hour != 1) hrS = "s";

    return hour + " hour" + hrS + ", " + minute + " minute" + minS + ".";
  }
}
