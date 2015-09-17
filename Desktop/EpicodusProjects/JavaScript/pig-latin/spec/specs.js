describe('punctuationLess', function() {
  it("deletes punctuation from phrase", function() {
    expect(punctuationLess("I'm learning 'programming'.")).to.equal("im learning programming"); //chai bdd documentation style
  });
});

describe('doesWordStartWithVowel', function() {
  it("determines if word starts with a vowel", function() {
    expect(doesWordStartWithVowel("a")).to.equal(true);
  });
});
