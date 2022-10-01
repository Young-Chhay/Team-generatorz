const Employee = require('../lib/Employee');

describe("Create Employee", () => {
    // Test for all use cases when initializing a new Child object
        const employee = new Employee("Young", 66, "young@gmail.com");
  
        // Verify that the new object has the correct properties
        expect(employee.name).toEqual(xpect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
      });
