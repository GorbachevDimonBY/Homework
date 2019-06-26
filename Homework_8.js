function Animal(name) {
  var foodAmount = 0;

  var self = this;

  function formatFoodAmount() {
    return foodAmount + ' гр.';
  }
  
  self.dailyNorm = function(amount) {
    if (!arguments.length) return formatFoodAmount();
    if (amount < 50 || amount > 500) {
      return ("Ошибка!");
    }
    return foodAmount = amount;
    }

  this.name = name;

  this.feed = function() {
    console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма');
  };
}

function Cat() {
  Animal.apply(this, arguments);

  var animalFeed = this.feed;
  this.feed = function() {
      animalFeed();
      console.log('Кот доволен ^_^');
      return this;
  };
  this.stroke = function() {
    console.log('Гладим кота');
    return this;
  };
}

var murzik = new Cat('Мурзик');

murzik.stroke().stroke().feed().feed().stroke().feed();

