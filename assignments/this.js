/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
1.New Binding: Is the function called by new?
3.Implicit Binding: Object Literals - Is the function called as a method, ie: obj.func()
2.Explicit Binding: Is the function called by call(), apply(), or bind()?
4.Window

If strict mode is enabled, return undefined.
Otherwise, return the global object, ie: window.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for New Binding

function Animal(food) {
    this.food = food;
    this.eat = function() {
      console.log(`This animal likes to eat ${this.food}`);
    }
  }

  const zebra = new Animal('grass'); //new keyword used to bind this keyword

// Principle 2

// code example for Implicit Binding
const hobbit = {
      name: "Samwise",
      age: 32,
      food: "taters",
      cook: function() {
        return `${this.name} loves to cook ${this.food}`;
      }
    }
    
    // Look at where the method was invoked and you will find your binding!
    console.log(hobbit.cook());
    //hobbit acts are this keyword 

// Principle 3

// code example for Explicit Binding
const person = {
      name: "Jill"
    }
    
    const hobbit = {
      name: "Frodo"
    }
    
    const skills = ["HTML","CSS","JS"];
    
    function introduce(skills1, skills2, skills3) {
      debugger;
      return `Hello! my name is: ${this.name} and these are my skills: ${skills1}, ${skills2}, ${skills3}`;
    }
    
    // Fucntion called with .call() - Passes arguments individually
    console.log(introduce.call(person, skills));
    
    // Fucntion called with .apply() - Passes lists
    Passes arguments as a single array of arguments
    console.log(introduce.apply(person, skills));
    


// Principle 4

// code example for Window Binding

function hello(param) {
    "use strict"; //strict mode enabled return undefined 
    console.log(this);
    return `I like to say: ${param}`;
  }
  
  console.log(hello("hello"));