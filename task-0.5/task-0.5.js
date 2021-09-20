{
  function calculateArea(length, height, width) {
    var semiArea;
    var area;
    semiArea = (length + height + width) / 2;
    semiArea =
      semiArea *
      ((semiArea - length) * (semiArea - height) * (semiArea - width));
    area = Math.sqrt(semiArea);
    return area;
  }
}

//console.log("The sides 3,4,5 have an area of " + calculateArea(3, 4, 5));
