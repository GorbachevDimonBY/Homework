var btn = document.getElementById('btn'),
    div = document.getElementsByClassName('mainBlock')[0],
    arr;

btn.addEventListener('click', function () {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://reqres.in/api/users?page=2', true);
    request.send();

    request.onloadend = function () {
        if (request.status == 200) {
            arr = JSON.parse(request.responseText);
            displayUsers();
        } else {
            div.innerHTML += '<p class = "error">Ошибка при получении данных!</p>';
        }
    }
})

function displayUsers() {
    for (i = 0; i < arr.data.length; i++) {
        div.innerHTML += '<div class = "userTab">Пользователь ' + (+[i] + 1) + '</div>';
    }
    for (i = 0; i < arr.data.length; i++) {
        div.innerHTML += '<div class = "userContent"><img src = "' + arr.data[i].avatar + '"><div class="text"><span>First Name: ' + arr.data[i]['first_name'] + '</span><span>Last Name: ' + arr.data[i]['last_name'] + '</span></div></div>';
    }
    var tab = document.getElementsByClassName('userTab'),
        tabContent = document.getElementsByClassName('userContent');
    hideTabsContent(1);
    tab[0].classList.add('whiteborder');

    function hideTabsContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tab[i].classList.remove('whiteborder');
        }
    }

    div.onclick = function (event) {
        var target = event.target;
        if (target.className == 'userTab') {
            for (var i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabsContent(i);
                    break;
                }
            }
        }
    }

    function showTabsContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabsContent(0);
            tab[b].classList.add('whiteborder');
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
}