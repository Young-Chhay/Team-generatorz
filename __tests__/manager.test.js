const Manager = require('../lib/Manager');

describe('Manager', () => {
  // Test for all use cases when initializing a new Child object
  describe('Manager Initialization', () => {
    const managerObjs = new Manager("Young", 69, "young@gmail.com", 19);

    it('Should return back an object with "name" property', () => {
      expect(managerObjs.name).toEqual(expect.any(String));
    });

    it('Should return back an object with "id" property', () => {
      expect(managerObjs.id).toEqual(expect.any(Number));
    });
    
    it('Should return back an object with "email" property', () => {
      expect(managerObjs.email).toEqual(expect.any(String));
    });

    it('Should return back an object with "Office number" property', () => {
      expect(managerObjs.officeNum).toEqual(expect.any(Number));
    });
  });

  describe('Manager Methods', () => {
    const managerObj = new Manager("Name", 69, "young@gmail.com", 19);

    it('Should return back String for "name" when getName() is called', () => {
      expect(managerObj.getName()).toBe('Name');
    });

    it('Should return back Integer "69" for ID when getID() is called', () => {
      expect(managerObj.getID()).toBe(69);
    });
    
    it('Should return back String for "young@gmail.com" when getName() is called', () => {
      expect(managerObj.getEmail()).toBe('young@gmail.com');
    });

    it('Should return back String for "Manager" when getRole() is called', () => {
      expect(managerObj.getRole()).toBe('Manager');
    });

    it('Should return back integer for "office number" when getOfficeNum() is called', () => {
      expect(managerObj.getOfficeNum()).toBe(19);
    });
  });
});