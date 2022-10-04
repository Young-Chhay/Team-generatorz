const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    // Test for all use cases when initializing a new Child object
    describe('Engineer Initialization', () => {
      const engineerObjs = new Engineer("Name", 69, "young@gmail.com", "github");
  
      it('Should return back an object with "name" property', () => {
        expect(engineerObjs.name).toEqual(expect.any(String));
      });
  
      it('Should return back an object with "id" property', () => {
        expect(engineerObjs.id).toEqual(expect.any(Number));
      });
      
      it('Should return back an object with "email" property', () => {
        expect(engineerObjs.email).toEqual(expect.any(String));
      });
  
      it('Should return back an object with "github" property', () => {
        expect(engineerObjs.github).toEqual(expect.any(String));
      });
    });
  
    describe('Engineer Methods', () => {
      const engineerObj = new Engineer("Name", 69, "young@gmail.com", "GitHub");
  
      it('Should return back String for "name" when getName() is called', () => {
        expect(engineerObj.getName()).toBe('Name');
      });
  
      it('Should return back Integer "69" for ID when getID() is called', () => {
        expect(engineerObj.getID()).toBe(69);
      });
      
      it('Should return back String for "young@gmail.com" when getName() is called', () => {
        expect(engineerObj.getEmail()).toBe('young@gmail.com');
      });

      it('Should return back String for "employee" when getRole() is called', () => {
        expect(engineerObj.getRole()).toBe('Engineer');
      });
  
      it('Should return back String for "GitHub" when getGithub() is called', () => {
        expect(engineerObj.getGithub()).toBe('GitHub');
      });
    });
  });