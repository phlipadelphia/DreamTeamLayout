// Import Employee constructor
const Employee = require("./employee")
// Intern constructor extends employee constructor
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }

    getSchool(){
        return this.school
    }
    getRole(){
        return 'intern'
    }
}
// Export Intern
module.exports = Intern