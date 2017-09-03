// A example of class in ES6

var Person = class {
    constructor(name, age) {
		this._name = name;
		this._age = age;
	}
    set name(n) {
		this._name = n;
	}
	get name() {
		return this._name;
	}
	set age(a) {
		this._age = a;
	}
	get age() {
		return this._age;
	}
	display() {
		return this._name +' '+ this._age;
	}
}

//var me = new Person("Dharmendra", 25);
//me.name
//me.age
//me.age = 26
//me.display()

var Employee = class extends Person {
	constructor(name, age, company) {
		super(name, age);
		this._company = company;
		
	}
	get company () {
		return this._company;
	}
	set company(c) {
		this._company = company;
	}

    fullInfo() {
        return super.display() +' '+this._company; 
    }
}

//var me = new Employee("Dharmendra", 25, "Amadeus");
//me.name
//me.age
//me.age = 26
//me.company
//me.display()