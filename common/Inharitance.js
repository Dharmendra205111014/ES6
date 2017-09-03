// an util function to achieve prototypical inheritance
// Not standard
if (!Object.prototype.extends) {
	Object.prototype.extends = function(baseObj) {
		this.prototype = Object.create(baseObj.prototype);
		this.prototype.constructor = this;
	}
}

// Example

var Person = function(name) {
	this.name = name;
};

Person.prototype.getName = function() {
	return this.name;
};


// Employee class which will extend Person

var Employee = function(name, salary) {
	// will need to call base class to initialize properties
	// But just initialization is not enough for complete inheritance
	Person.call(this, salary);
	this.salary = salary;
};
Employee.extends(Person);
Employee.prototype.getSalary = function() {
	return this.salary;
};
