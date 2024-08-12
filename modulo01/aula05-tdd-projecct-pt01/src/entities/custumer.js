const Base = require('./base/base')
class Custumer extends Base {
    constructor({name, id, age}){
        super({id, name})

        this.age = age
    }
}

module.exports = Custumer