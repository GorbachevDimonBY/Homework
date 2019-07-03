function Animal(name) {
  this._name = name;
  this._foodAmount = 0;
  this._self = this;
}

Animal.prototype._formatFoodAmount = function() {
  return this._foodAmount + ' гр.';
};
  
Animal.prototype.dailyNorm = function(amount) {
  if (!arguments.length) return this._formatFoodAmount();
  if (amount < 50 || amount > 500) {
    return ("Ошибка!");
  }
  return this._foodAmount = amount;
};

Animal.prototype.feed = function() {
  console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма');
};

function Cat() {
  Animal.apply(this, arguments);
}
  
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
  Animal.prototype.feed.apply(this, arguments);
  console.log('Кот доволен ^_^');
  return this;
};

Cat.prototype.stroke = function() {
  console.log('Гладим кота');
  return this;
};

var murzik = new Cat('Мурзик');
murzik.stroke().stroke().feed().feed().stroke().feed();

