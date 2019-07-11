
//------------------- Задание 1 --------------------

function filterArr(arr) {
  arr = arr.filter(function(item) {
    return item > 0;
  });
  return arr;
}

filterArr([-1, 0, 2, 34, -2])

//------------------- Задание 2 --------------------

function returnNumber(arr) {
	var positiveNumber = arr.find(function(item) {
    return item > 0;
    });
	return positiveNumber;
}

returnNumber([-1, 0, 2, 34, -2]);

//------------------- Задание 3 --------------------

function definePalindrome(text) {
  var textArr = text.split('').reverse().join('');
  console.log(text.toLowerCase() === textArr.toLowerCase());
}

definePalindrome('шаЛаШ');
definePalindrome('привет');

//------------------- Задание 4 --------------------

function areAnagrams(one, two) {
  console.log(one.toLowerCase().split('').sort().join('') 
           == two.toLowerCase().split('').sort().join(''));
}

areAnagrams('кот', 'отк');
areAnagrams('кот', 'атк'); 
areAnagrams('кот', 'отко'); 

//------------------- Задание 5 --------------------

function divideArr(arr, length) {
  var transformArr = [];
  for (i = 0; i < arr.length; i += length) {
    transformArr.push(arr.slice(i, i + length));
  }
  console.log(transformArr);
}

divideArr([1, 2, 3, 4], 2); 
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); 

divideArr([1, 2, 3, 4], 4); 
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 5); 