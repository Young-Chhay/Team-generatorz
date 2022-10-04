const Employee = require('../lib/Employee');

describe('Employee', () => {
  // Test for all use cases when initializing a new Child object
  describe('Employee Initialization', () => {
    const employeeObjs = new Employee("Young", 69, "young@gmail.com");

    it('Should return back an object with "name" property', () => {
      expect(employeeObjs.name).toEqual(expect.any(String));
    });

    it('Should return back an object with "id" property', () => {
      expect(employeeObjs.id).toEqual(expect.any(Number));
    });

    it('Should return back an object with "email" property', () => {
      expect(employeeObjs.email).toEqual(expect.any(String));
    });
  });

  describe('Employee Methods', () => {
    const employObj = new Employee("Young", 69, "young@gmail.com");

    it('Should return back String for "name" when getName() is called', () => {
      expect(employObj.getName()).toBe('Young');
    });

    it('Should return back Integer "69" for ID when getID() is called', () => {
      expect(employObj.getID()).toBe(69);
    });

    it('Should return back String for "young@gmail.com" when getName() is called', () => {
      expect(employObj.getEmail()).toBe('young@gmail.com');
    });

    it('Should return back String for "employee" when getRole() is called', () => {
      expect(employObj.getRole()).toBe('Employee');
    });
  });
});
