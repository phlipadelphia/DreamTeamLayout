// Import Employee constructor
const Employee = require("./employee")
// Manager constructor extends employee constructor
class Manager extends Employee{
    constructor(name, id, email, phone){
        super(name, id, email)
        this.phone = phone
    }

    getPhone(){
        return this.phone
    }
    getRole(){
        return 'Manager'
    }
}
// Export Manager
module.exports = Manager