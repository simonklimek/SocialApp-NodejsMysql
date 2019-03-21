
module.exports = {

    validate (data, rules) {
        return Object.keys(rules).filter((key) => {
            return !rules[key](data[key])
        }).length === 0
    }

}