//------------ Задание 1

{
    let name = prompt('Введите ваше имя');
    const obj = {
        name,
        sayHi() {
            return `Hi, ${this.name}!`;
        }
    }
}

//------------ Задание 2

{
    function degree({
        a: x,
        b: y
    }, z = 1) {
        return x ** y * z;
    }

    degree({
        a: 2,
        b: 3
    }, 4)
}

//------------ Задание 3

{
    const arr = ['Vasya', 25];

    function user(name, age) {
        return `Hello, I'm ${name} and I'm ${age} years old`;
    }

    user(...arr);
}

//------------ Задание 4

{
    function numbers(...rest) {
        for (let value of rest) {
            console.log(value);
        }
    }
    numbers(1, 2, 3, 4);
}

//------------Задание 5

{
    function countVowelLetters(text) {
        text = text.toLowerCase().split('');
        
        const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
        let counter = 0;

        text.forEach(items => vowelLetters.includes(items) && counter++);
        return counter;
    }

    countVowelLetters('Шла Саша по шоссе И сосала сУшку');
}

//---------- Задание 6

{
    function transform(arrUsers) {
        const underForty = arrUsers.filter(item => item.age < 40),
              userFedor = arrUsers.find(item => item.name.startsWith('Fedor'));
              obj = {
                'Пользователи младше 40': underForty,
                'Пользователь с именем Федор': userFedor
              }
        return obj;
    }

    transform([
        {name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ])
}

//------------ Задание 7

{
    function transform(arrNames) {
        const arr = arrNames.map((item, index) => ({[`Пользователь ${index + 1}`]: item}));
        return arr;
    }

    transform(['Вася', 'Петя', 'Дима']);
}

//------------ Задание 8

{
    function transform(arrUsers) {
        return arrUsers.reduce((mainObj, index) => Object.assign(mainObj, index), {});
    }

    transform([
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'},
        {name: 'Jora', salary: '3300$'}
    ]);
}

//------------ Задание 9

{
    class Animal {
        constructor(name) {
            this.name = name;
            this._foodAmount = 50;
        }
        _formatFoodAmount() {
            return `${this._foodAmount} гр.`;
        }
        dailyNorm(amount) {
            if (!arguments.length) return this._formatFoodAmount();

            if (amount < 50 || amount > 500) {
            return `Недопустимое количество корма.`;
        }

            this._foodAmount = amount;
        }
        feed() {
            console.log(`Насыпаем в миску ${this.dailyNorm()} корма.`);
        }
    }

    class Cat extends Animal {
        constructor (name) {
            super(name);
        }
        feed() {
            super.feed();
            console.log('Кот доволен ^_^');
            return this;
        }
        stroke() {
            console.log('Гладим кота.');
            return this;
        }
    }

    let barsik = new Cat('Барсик');

    console.log(barsik.feed().stroke().stroke().feed());

    barsik = null;
}

//------------ Задание 10

{
    function showNumbers(x, y) {
    
        return new Promise((resolve, reject) => {
            if (x > y) [x, y] = [y, x];
            let timerId = setInterval(() => {
              
                if (x === y) {
                    clearInterval(timerId);
                    resolve(x);
                }

            console.log(x++);
            }, 1000)
        });
    }

    showNumbers(15, 10).then(result => console.log(result));

}
