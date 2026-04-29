class Monster {
    health = 100;
  constructor(name) {
	this.name = name;
  }
}

let  monster = new Monster('Giant Snake');
console.log(monster.name);
console.log(monster.health);