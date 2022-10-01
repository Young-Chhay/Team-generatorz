const Intern = require('../lib/Intern');

describe("Intern", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name and age if provided valid arguments", () => {
        const intern = new Intern("Mark");
  
        // Verify that the new object has the correct properties
        expect(intern.name).toEqual("Mark");
        expect(intern.school).toEqual("CSUF");
      });
    });
});
