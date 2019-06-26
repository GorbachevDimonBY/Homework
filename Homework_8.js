function Animal(name) {
  var foodAmount = 0;

  function formatFoodAmount() {
    return foodAmount + ' гр.';
  }
  
  this.dailyNorm = function(amount) {
    if (!arguments.length) return formatFoodAmount();
    if (amount < 50 || amount > 500) {
      return ("Ошибка!");
    }
    return foodAmount = amount;
    }

  this.name = name;

  this.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма');
  };

  this.stroke = function() {
    console.log('Гладим кота');
    return this;
  };
}

function Cat() {
  Animal.apply(this, arguments);

  var happyCat = this.feed;
  this.feed = function() {
      happyCat.call(this);
      console.log('Кот доволен ^_^');
      return this;
  };
}

var murzik = new Cat('Мурзик');

murzik.stroke().stroke().feed().feed().stroke().feed();

