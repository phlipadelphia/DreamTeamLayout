// Import Employee constructor
const Employee = require("./employee")
// Enginner constructor extends employee constructor
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }

    getGithub(){
        return this.github
    }
    getRole(){
        return 'engineer'
    }
}
// Export Engineer
module.exports = Engineer