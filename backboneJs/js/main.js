/*var Person = function(config) {
    this.name = config.name;
    this.age = config.age;
    this.occupation = config.occupation;
}

Person.prototype.work = function(){
 return this.name + " is working. ";
}*/

//defining class in Backbon JS
var Person = Backbone.Model.extend({
	defaults:{
		name : 'Panneer',
		age: 25,
		occupation: 'software developer'
	},
	validate: function(attributes){
		if(attributes.age< 0){
			return 'Age must be postive.';
		}
		if(!attributes.name){
			return 'Every person must have a name';
		}
	},
	work: function(){
		return this.get('name') + 'is working.';
	},
	person.on('error'.function(model,error){
		console.log(error);
	});

});
