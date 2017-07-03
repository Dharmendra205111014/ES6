//Example of counter => implements private members in ES5
var counter = (function(){
    var counter = function(d, s) {
        this['diff'] = d;
        this['current'] = s || 0;
    }
    counter.prototype = {
        increment : function() {
            this['current']+=this['diff'];
            console.log(this['current']);
        },
        decrement: function() {
            this['current']-=this['diff'];
            console.log(this['current']);
        }
    }
    return counter;
})();

//Example of counter with symbol => implements private members in ES6
var counter = (function(){
    var diff = Symbol(diff);
    var current = Symbol(current);
    var counter = function(d, s) {
        this[diff] = d;
        this[current] = s || 0;
    }
    counter.prototype = {
        increment : function() {
            this[current]+=this[diff];
            console.log(this[current]);
        },
        decrement: function() {
            this[current]-=this[diff];
            console.log(this[current]);
        }
    }
    return counter;
})();