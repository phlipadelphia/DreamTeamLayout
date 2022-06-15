// const the Employee constructor
const Employee = require('../lib/Employee');
// test the constructor
test("Creating An Employee Object", () => {
    const employee = new Employee('Philly, 33, 123fake@madeup.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// testing the constructor and the methods
test("Check Employee Name", () => {
    const employee = new Employee('Philly, 33, 123fake@madeup.com');
    expect(employee.getName()).toEqual(expect.any(String))
});

test("Check Employee ID", () => {
    const employee = new Employee('Philly, 33, 123fake@madeup.com');
    expect(employee.getId()).toEqual(expect.any(Number))
});

test("Check Employee Email", () => {
    const employee = new Employee('Philly, 33, 123fake@madeup.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
});

test("Check Employee Role", () => {
    const employee = new Employee('Philly, 33, 123fake@madeup.com');
    expect(employee.getRole()).toEqual("Employee")
});