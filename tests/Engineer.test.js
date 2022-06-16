// const the Engineer constructor
const Engineer = require('../lib/Engineer');
// test the constructor and the methods
test("Creating a a github", () => {
    const testGithub = "phlipadelphia";
    const employeeInit = new Engineer("Philly", 12, "phillip.t.mock@gmail.com", testGithub);
    expect(employeeInit.github).toBe(testGithub);
});
// test getGithub method
test("Get github via getGithub method", () => {
    const testGithub = "phlipadelphia";
    const employeeInit = new Engineer("Philly", 12, "phillip.t.mock@gmail.com", testGithub);
    expect(employeeInit.getGithub()).toBe(testGithub);
});
// test getRole method
test("Test role via getRole method", () => {
    const returnValue = "Engineer";
    const employeeInit = new Engineer("Philly", 12, "phillip.t.mock@gmail.com", "phlipadelphia");
    expect(employeeInit.getRole()).toBe(returnValue);
});
