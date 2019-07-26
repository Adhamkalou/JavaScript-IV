/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday





2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

//

function GameObject(powerRangers) {
    this.createdAt = powerRangers.createdAt;
    this.dimensions = powerRangers.dimensions;
    this.tag = powerRangers.tag;
  }
  GameObject.prototype.destroy = function () {
    return `${this.tag} was removed from the game.`
  }
  
  
  //
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  
  //
  
  function CharacterStats(powerRangers) {
    GameObject.call(this, powerRangers);
    this.hP = powerRangers.hP;
    this.tag = characterStatsOptions.tag;

  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function () {
    return `${this.tag} took damage`
  }
  
  
  //
  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
   
  
  
  //
  
  function Humanoid(powerRangers) {
    CharacterStats.call(this, powerRangers);
    this.guild = powerRangers.guild;
    this.weapons = powerRangers.weapons;
    this.language = powerRangers.language;
  
  }
  
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function () {
    return `${this.tag} offers a greeting in ${this.language}.`
  }
  
  
  //
  
  
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  
  
  //
  
  
  //
  
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      hP: 5,
      tag: 'Bruce',
      guild: 'Mage Guild',
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
      hP: 15,
      tag: 'Sir Mustachio',
      guild: 'The Round Table',
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
      hP: 10,
      tag: 'Lilith',
      guild: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.hP); // 15
    console.log(mage.tag); // Bruce
    console.log(swordsman.guild); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!