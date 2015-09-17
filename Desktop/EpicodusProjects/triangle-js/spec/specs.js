describe('triangle detector', function() {
  it("determines if dimensions DO NOT create a triangle", function() {
    expect(isTriangle(2, 2, 1000)).to.equal("Your dimensions do not create a triangle."); //chai bdd documentation style
  });

  it("determines if dimensions CREATE a triangle", function() {
    expect(isTriangle(3, 4, 5)).to.equal("Your dimensions create a scalene triangle.");
  });
});

describe('typeOfTriangle', function() {
  it("identifies equilateral triangles", function() {
    expect(typeOfTriangle( 2, 2, 2)).to.equal("an equilateral ");
  });
  it("identifies isosceles triangles", function() {
    expect(typeOfTriangle( 5, 5, 4)).to.equal("an isosceles ");
  });
  it("identifies scalene triangles", function() {
    expect(typeOfTriangle( 3, 4, 5)).to.equal("a scalene ");
  });
});
