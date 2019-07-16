
//--------------- Задание 1 -------------------

function returnArr(arr) {
	
	transformArr = arr.map(function(item) {
		var obj = {}; 
		obj.name = item;
		return obj;
	});	
	return transformArr;
}
returnArr(['HTML', 'CSS', 'JavaScript']);


//--------------- Задание 2 -------------------

function returnStr(arr) {

	var time = arr.reduce(function(sum, current) {
		return sum += ' : ' + current;
	}, 'Текущее время');

	return time;
}

returnStr(['00', '13', '24']);

//--------------- Задание 3 -------------------

function sumVowel(text) {
	var vowel = ['а', 'я', 'о', 'е', 'у', 'ю', 'ы', 'и', 'э', 'я'];
	var textLower = text.toLowerCase().split('');
	var vowelLength = textLower.reduce(function(sum, item) { 
		return vowel.indexOf(item) > -1 ? ++sum : sum }, 0);
	return vowelLength;
}

sumVowel('ЗдравствУйте, АлесЯ')

//--------------- Задание 4 -------------------

function displayText(text) {
	arr = text.split(/[.?!]/);
	arr.forEach(function(item) {
		console.log(item.trim() + ': ' + item.match(/[а-яА-Я]/g).length);
    });
}

displayText('Привет! Как дела? Пошли гулять. Хорошо');

