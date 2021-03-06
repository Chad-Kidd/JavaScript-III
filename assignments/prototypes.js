/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/* // MAKE THIS A CONSTRUCTOR FUNCTION
// THIS IS THE PARENT
  === GameObject ===

  // SHOULD HAVE THESE ATTRIBUTES 
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
  */
 //PARENT - GAMEOBJECT

  function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
  // this.phrase = attributes.phrase;
}
// Methods of the Parent - GameObject
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game`;
}


/* // MAKE THIS A CONSTRUCTOR FUNCTION
// THIS IS A CHILD
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
  */ 
  function CharacterStats(childAttributes) {
  // Gain access to all of the attributes in the Parent constructor
  GameObject.call(this,childAttributes);
  this.healthPoints = childAttributes.healthPoints;
}
// We give Child access to all of Parent's methods INHERITS 
CharacterStats.prototype = Object.create(GameObject.prototype);

//METHOD FOR CHILD 
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`;
}


/* // MAKE THIS A CONSTRUCTOR FUNCTION
// THIS IS A GRANDCHILD
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
  */


  function Humanoid(grandAttributes) {
    // Gain access to all of the attributes in the Parent constructor
  CharacterStats.call(this,grandAttributes);    
  this.team = grandAttributes.team; 
  this.weapons = grandAttributes.weapons; 
  this.language = grandAttributes.language; 
  
}
// We give Child access to all of Parent's methods INHERITS 
Humanoid.prototype = Object.create(CharacterStats.prototype); 

//METHOD FOR GRANDCHILD 
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`; 
}

 
/* // MAKE PARENT CHILD AND GRANDCHILD LINK
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!


// VILLAIN CONSTRUCTOR
function Villian(villianAttributes){
  Humanoid.call(this, villianAttributes); 
  this.killShot = villianAttributes.killShot;
  this.opponentHealth = villianAttributes.opponentHealth;
}
//inherit
Villian.prototype = Object.create(Humanoid.prototype); 

//methods 
Villian.prototype.kill = function () {
  this.opponentHealth -= 50;
  return `The villian ${this.name} attacks with his ${this.killShot}`;
}

//HERO
function Hero (heroAttributes){
  this.superWeapon = heroAttributes.superWeapon;
  this.opponentHealth = heroAttributes.opponentHealth;

  Humanoid.call(this, heroAttributes);
}
//INHERIT
Hero.prototype = Object.create(Humanoid.prototype);  

//METHODS
Hero.prototype.heroAttack = function() {
  this.opponentHealth -= 80; 
  return `The hero ${this.name} receives his weapon from Cat Woman, ${this.superWeapon} and seriously F's up the emotionally stunted villian`; 
}

//HERO
const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Flying Rodent Man',
  team: 'Gotcha City',
  weapons: [
    'Money' , 'Utility Belt' , 'Cat Treats',
  ],
  superWeapon: 'A Hug',
  language: 'English',
  opponentHealth: 100,
});


//VILLAIN
villain = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 6,
  },
  hp: 10,
  name: 'Crazy Clown',
  team: 'Asylum',
  weapons: [
    'Tricks', 'Jokes', 'laughing gas', 'Wit'
  ],
  language: 'Humorish',
  killShot: 'Killing Joke',
  opponentHealth: 100,
});

//STORY TIME


console.log(`${villain.name} has left ${villain.team} and is sneaking around ${hero.team}`);
console.log(`You know ${hero.name} was not gonna let that happen.`)
console.log(`The match ${hero.name} vs ${villain.name} has begun.`);
console.log(`The villian has the following weapons ${villain.weapons}`);
console.log(`The hero has the following weapons ${hero.weapons}`); 
console.log(`The villian speaks the following language ${villain.language} representing team: ${villain.team}`);
console.log(`The hero speaks the following language ${hero.language} representing team: ${hero.team}`);
console.log(villain.kill());
console.log(`${hero.name} has been reduced, ${hero.name} now has ${villain.opponentHealth}`);
console.log(hero.heroAttack());
console.log(`${villain.name} has been reduced, ${villain.name} now has ${villain.opponentHealth} and retreats to his dark corner of the world.`);
console.log(`${hero.name} annouces: NOW ALL IS RIGHT IN GOTHAM, I MEAN THE KINGDOM!  TILL NEXT TIME.`); 

//for some reason the attacks arent calculating properly