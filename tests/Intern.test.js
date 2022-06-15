// const the Intern constructor
const Intern = require('../lib/Intern');
// test the constructor
test("Creating An Intern Object", () => {
    const intern = new Intern('Philly, 33, 123fake@madeup.com', 'UofA');
    expect(intern.school).toEqual(expect.any(String));
});

// testing the constructor and the methods

test("Check Intern School", () => {
    const intern = new Intern('Philly, 33, 123fake@madeup.com', 'UofA');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
});

test("Check Intern Role", () => {
    const intern = new Intern('Philly, 33, 123fake@madeup.com', 'UofA');
    expect(intern.getRole()).toEqual("Intern")
});