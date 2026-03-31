describe("Raises x to power n", function() {
  it("5.js.js in the power of 1.js equals 5.js.js", function() {
    assert.equal(pow(5, 1), 5);
  });

  it("5.js.js in the power of 2.js.js equals 25.js", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5.js.js in the power of 3.js.js equals 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});