// const the Intern constructor
const Intern = require('../lib/Intern');
// testing the constructor and the methods
test("Creating a new intern", () => {
    const testSchool = "Name of School";
    const employeeInit = new Intern("Philly", 12, "phillip.t.mock@gmail.com", testSchool);
    expect(employeeInit.school).toBe(testSchool);
});
// test getSchool method
test("Get school via getSchool method", () => {
    const testSchool = "Name of School";
    const employeeInit = new Intern("Philly", 12, "phillip.t.mock@gmail.com", testSchool);
    expect(employeeInit.getSchool()).toBe(testSchool);
});
// test getRole method
test("Test role via getRole method", () => {
    const returnValue = "Intern";
    const employeeInit = new Intern("Philly", 12, "phillip.t.mock@gmail.com", "Name of School");
    expect(employeeInit.getRole()).toBe(returnValue);
});