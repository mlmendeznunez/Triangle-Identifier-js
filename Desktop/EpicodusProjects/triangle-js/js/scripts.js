var isTriangle = function(sideA, sideB, sideC) {
  if (sideA <= (sideB + sideC) && sideB <= (sideC + sideA) && sideC <= (sideA + sideB)) {
    return "Your dimensions create " + typeOfTriangle (sideA, sideB, sideC) + "triangle.";
  } else {
    return "Your dimensions do not create a triangle.";
  }
};


var typeOfTriangle = function(sideA, sideB, sideC) {
  if (sideA === sideB && sideB === sideC && sideC === side) {
    return "an equilateral ";
  } else if (sideA === sideB || sideB === sideC || sideC === sideA) {
    return "an isosceles ";
  } else {
    return "a scalene ";
  }
};

$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) { //#id on html
    var sideA = parseInt($("input#sideA").val()); //to convert String input to integer
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());

    var result = isTriangle(sideA, sideB, sideC);

    $(".triangle").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
