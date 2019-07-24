var btn = document.getElementsByTagName('button')[0],
    X = document.getElementsByTagName('input')[0],
    Y = document.getElementsByTagName('input')[1],
    div = document.getElementsByTagName('div')[0];

function disabled() {
    (X.value.trim() != '' && Y.value.trim() != '') ?
    btn.removeAttribute('disabled'): btn.setAttribute('disabled', 'disabled');
}

X.addEventListener('keyup', disabled);
Y.addEventListener('keyup', disabled);

btn.addEventListener('click', hello);

function hello() {
    if (isNaN(+X.value) || isNaN(+Y.value) || X.value < 1 || X.value > 10 || Y.value < 1 || Y.value > 10) {
        alert('Введите корректное число');
    } else {
        var table = document.createElement('table');
        for (i = 1; i <= Y.value; i++) {
            var tr = document.createElement('tr');
            for (j = 1; j <= X.value; j++) {
                var td = document.createElement('td');
                (i % 2 === j % 2) ? td.classList.add('black'): td.classList.add('white');
                tr.appendChild(td);
            };
            table.appendChild(tr);
        }
        div.innerHTML = '';
        div.appendChild(table);
    };
}

div.onclick = function () {
    var td = div.getElementsByTagName('td');

    for (var i = 0; i < td.length; i++) {
        td[i].classList.toggle('black');
    }
}