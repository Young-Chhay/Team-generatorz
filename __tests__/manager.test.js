const Manager = require('../lib/Manager');

describe("Manager", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name and age if provided valid arguments", () => {
        const manager = new Manager("Sarah");
  
        // Verify that the new object has the correct properties
        expect(manager.name).toEqual("Sarah");
        expect(manager.officeNum).toEqual(3);
      });
    });
});