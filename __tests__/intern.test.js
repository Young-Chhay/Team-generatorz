const Intern = require('../lib/Intern');

describe('Intern', () => {
  // Test for all use cases when initializing a new Child object
  describe('Intern Initialization', () => {
    const internObjs = new Intern("Young", 69, "young@gmail.com", "CSUF");

    it('Should return back an object with "name" property', () => {
      expect(internObjs.name).toEqual(expect.any(String));
    });

    it('Should return back an object with "id" property', () => {
      expect(internObjs.id).toEqual(expect.any(Number));
    });

    it('Should return back an object with "email" property', () => {
      expect(internObjs.email).toEqual(expect.any(String));
    });

    it('Should return back an object with "school" property', () => {
      expect(internObjs.school).toEqual(expect.any(String));
    });
  });

  describe('Intern Methods', () => {
    const internObj = new Intern("Name", 69, "young@gmail.com", 'CSUF');

    it('Should return back String for "name" when getName() is called', () => {
      expect(internObj.getName()).toBe('Name');
    });

    it('Should return back Integer "69" for ID when getID() is called', () => {
      expect(internObj.getID()).toBe(69);
    });

    it('Should return back String for "young@gmail.com" when getName() is called', () => {
      expect(internObj.getEmail()).toBe('young@gmail.com');
    });

    it('Should return back String for "Intern" when getRole() is called', () => {
      expect(internObj.getRole()).toBe('Intern');
    });

    it('Should return back String for "CSUF" when getSchool() is called', () => {
      expect(internObj.getSchool()).toBe('CSUF');
    });
  });
});