var btn = document.getElementById('button'),
    table = document.getElementsByTagName('tbody')[0],
    trTable = document.getElementsByTagName('tr');

btn.addEventListener('click', function () {
    var tr = document.createElement('tr');

    for (i = 0; i < 3; i++) {
        var td = document.createElement('td');
        tr.appendChild(td);
    }
    table.insertBefore(tr, trTable[0]);
})

var selectedTd;

table.onclick = function (event) {
    var target = event.target;

    if (target.tagName != 'TD') return;

    selectInput(target);
};

function selectInput(item) {

    selectedTd = item;
    if (selectedTd.innerHTML == '') {
        selectedTd.innerHTML = '';
    } else {
        selectedTd.innerHTML = selectedTd.innerHTML;
    }
    selectedTd.innerHTML = '<input type="text">';
    var input = document.getElementsByTagName('input')[0];
    input.focus();
    input.onblur = function () {
        var text = input.value;
        selectedTd.innerHTML = text;
    };
}

