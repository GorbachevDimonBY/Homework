
//--------------- Задание 1 -------------------

function returnArr(arr) {
	
	return arr.map(function(item) {
		var obj = {}; 
		obj.name = item;
		return obj;
	});	

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
	var arr = text.split(/[.?!]/);
	return arr.forEach(function(item) {
		var sum = 0;
    	for (var i = 0; i < item.length; i++) {
			if (item[i].toLowerCase() != item[i].toUpperCase()) sum++;
        }
		console.log(item.trim() + ': ' + sum);
	});
}

displayText('Привет! Как дела? Пошли гулять. Хорошо');