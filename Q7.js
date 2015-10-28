// if (!Function.prototype.bind) {
  Function.prototype.bind = function(obj) {
    var fToBind = this;
    return fToBind.apply(obj);
  }
//

var Hero = {
  hitPoints: 100,
  getLife: function() {
    return this.hitPoints;
  }
};

var LinksLife = Hero.getLife.bind(Hero);

console.log(LinksLife());
