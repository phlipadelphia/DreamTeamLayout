// const the Manager constructor
const Manager = require('../lib/Manager');
// test the constructor
test("Creating A Manager Object", () => {
    const manager = new Manager('Philly, 33, 123fake@madeup.com', '33');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// testing the constructor and the methods

test("Check Manager Role", () => {
    const intern = new Manager('Philly, 33, 123fake@madeup.com', 'UofA');
    expect(manager.getRole()).toEqual("Manager")
});