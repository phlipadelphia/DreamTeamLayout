// const the Manager constructor
const Manager = require('../lib/Manager');
// test the constructor and methods
test("Creating a new manager", () => {
    const testOfficeNumber = 5556667777;
    const employeeInit = new Manager("Philly", 2, "phillip.t.mock@gmail.com", testOfficeNumber);
    expect(employeeInit.phone).toEqual(testOfficeNumber);
});
// test getPhone method
test("Get office number via getPhone method", () => {
    const testOfficeNumber = 2;
    const employeeInit = new Manager("Philly", 2, "phillip.t.mock@gmail.com", testOfficeNumber);
    expect(employeeInit.getPhone()).toBe(testOfficeNumber);
});
// test getRole method
test("Test role via getRole method", () => {
    const returnValue = "Manager";
    const employeeInit = new Manager("Philly", 12, "phillip.t.mock@gmail.com", 5556667777);
    expect(employeeInit.getRole()).toBe(returnValue);
});
