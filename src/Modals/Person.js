export var Person = (function() {
    function Person(name, lastname,age) {
        var savings = 0 ;
        this.checkIfAvailable = function (value) {
            return savings >= value
        }
        this.setSavings = function() {
            return 0 ;
        };
        this.paycheck = function () {
            savings +=  100 ;
        };
        this.getLastName = function() {
            return lastname;
        };
        this.getAge = function() {
            return age;
        };
        this.getName = function() {
            return name;
        };
    }

    return Person;
}());