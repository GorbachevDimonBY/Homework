//.
//.
//------Практическое задание 2 -----------

function Cat(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.name = name;

    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма');
    };
}

var murzik = new Cat('Мурзик');

murzik.feed();


//------Практическое задание 3 -----------

function Cat(name) {
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
}

var murzik = new Cat('Мурзик');

console.log(murzik.dailyNorm());
murzik.feed();
console.log(murzik.dailyNorm(550));
murzik.feed();
console.log(murzik.dailyNorm(55));
murzik.feed();



