"use strict";
describe("how to run a test", function() {
  it("should work...", function() {
    var add = (function(x, y) {
      return x + y;
    });
    expect(add(5, 3)).toBe(8);
  });
});

//# sourceMappingURL=mySpec.js.map
