{
  function calculateArea(length, height, width) {
    var semiArea;
    semiArea = (length + height + width) / 2;

    area = Math.sqrt(
      semiArea *
        ((semiArea - length) * (semiArea - height) * (semiArea - width))
    );
    return area;
  }
}
