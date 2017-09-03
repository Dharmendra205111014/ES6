//Scope in js

var person = function(name) {
    this.name = name;
}

person.prototype = {
    getBio : function(age, salary) {
        age = age || this.age;
        salary = salary || this.salary;
        console.log( "name => "+this.name+" Age=> " + age+" Salary=> " + salary );
    }
}

var p = new person("Dharmendra");

var p1 = {name: 'jayendra'}

//Apply
p.getBio.apply(p1,[23,60000])
    //result : name => jayendra Age=> 23 Salary=> 60000

//call
p.getBio.call(p1,30,90000);
    //result : name => jayendra Age=> 30 Salary=> 90000

//bind
p.getBio = p.getBio.bind(p)
p.getBio.apply(p1,[23,60000])
    //result : name => Dharmendra Age=> 23 Salary=> 60000
p.getBio.call(p1,30,90000);
    //result : name => Dharmendra Age=> 30 Salary=> 90000


