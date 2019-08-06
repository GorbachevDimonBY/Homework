//------------ Задание 2 --------------

var telephone = /(^\+?375\-?|^8\-?0)(25|44|29|33|17)\-?\d{3}-?\d{2}-?\d{2}$/;

telephone.test('+375-25-777-77-77');
telephone.test('375299999999');
telephone.test('8-044-444-44-44');
telephone.test('8033-6666666');

//------------ Задание 3 --------------

function sumVowel(str) {
    var vowelLength = str.match(/[аяоеуюыиэя]/ig).length;
    return vowelLength;
}

sumVowel('ЗдравствУйте, АлесЯ');