var Hero = {
  hitPoints: 100,
  getLife: function() {
    return this.hitPoints;
  }
};

var LinksLife = Hero.getLife.bind(Hero);

console.log(LinksLife());
