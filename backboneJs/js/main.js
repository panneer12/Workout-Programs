var Person = function(config) {
    this.name = config.name;
    this.age = config.age;
    this.occupation = config.occupation;
}

Person.prototype.work = function(){
 return this.name + " is working. ";
}

var Person = Backbone.Model.extend({
	defaults:{
		name : 'Panneer',
		age: 25,
		occupation: 'software developer'
	},
	work.function(){
		return this.get('name')+ 'is working.';
	}

});