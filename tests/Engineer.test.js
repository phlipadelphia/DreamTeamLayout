// const the Engineer constructor
const Engineer = require('../lib/Engineer');
// test the constructor
test("Creating An Engineer Object", () => {
    const engineer = new Engineer('Philly, 33, 123fake@madeup.com', 'phlipadelphia');
    expect(engineer.github).toEqual(expect.any(String));
});

// testing the constructor and the methods

test("Check Engineer Github", () => {
    const engineer = new Engineer('Philly, 33, 123fake@madeup.com', 'phlipadelphia');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))
});

test("Check Employee Role", () => {
    const employee = new Employee('Philly, 33, 123fake@madeup.com', 'phlipadelphia');
    expect(employee.getRole()).toEqual("Engineer")
});