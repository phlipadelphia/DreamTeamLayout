// const the Employee constructor
const Employee = require('../lib/Employee');
// test the constructor 
test("Creates a new employee", () => {
    const employeeInit = new Employee();
    expect(typeof(employeeInit)).toBe("object");
})
// testing name
test("Check Employee Name", () => {
    const name = "Philly";
    const employeeInit = new Employee(name);
    expect(employeeInit.name).toBe(name);
})
// testing id
test("Check Employee ID", () => {
    const id = 12;
    const employeeInit = new Employee("Philly", id);
    expect(employeeInit.id).toBe(id);
})
// testing email
test("Check Employee Email", () => {
    const email = "phillip.t.mock@gmail.com";
    const employeeInit = new Employee("Philly", 12, email);
    expect(employeeInit.email).toBe(email);
})
// test the methods
// test getName method
test("Get name via getName method", () => {
    const testName = "Philly";
    const employeeInit = new Employee(testName);
    expect(employeeInit.getName()).toBe(testName);
})
// test getId method
test("Test id via getId method", () => {
    const testId = 12;
    const employeeInit = new Employee("Philly", testId);
    expect(employeeInit.getId()).toBe(testId);
})
// test getEmail method
test("Test email via getEmail method", () => {
    const testEmail = "phillip.t.mock@gmail.com";
    const employeeInit = new Employee("Philly", 12, testEmail);
    expect(employeeInit.getEmail()).toBe(testEmail);
})
// test getRole method
test("Test role via getRole method", () => {
    const returnValue = "Employee";
    const employeeInit = new Employee("Philly", 12, "phillip.t.mock@gmail.com");
    expect(employeeInit.getRole()).toBe(returnValue);
})