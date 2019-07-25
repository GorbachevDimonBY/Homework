localStorage.clear();

var container = document.getElementById('container'),
    p1 = document.createElement('p'),
    p2 = document.createElement('p');

container.appendChild(p1);
container.appendChild(p2);

p1.innerHTML = 'Hello, my name <a href="https://www.youtube.com/">Ivan</a> <a href="https://www.youtube.com/">Ivanov</a>';
p2.innerHTML = 'Hello, my name <a href="https://www.youtube.com/">Petya</a> <a href="https://www.youtube.com/">Petrov</a>';

var btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function () {
    for (var i = 0; i < p1.children.length; i++) {
        var child = p1.children[i];
        child.classList.toggle('styleLinks');
    }
});

container.children[1].onclick = function (event) {
    var target = event.target;
    event.preventDefault();
    alert(target.getAttribute('href'));
    if (localStorage['Link 1'] == null) {
        localStorage['Link 1'] = JSON.stringify({ path: 'https://google.com' });
        alert('Ссылка успешно сохранена');
    } else {
        alert(localStorage['Link 1']);
    }
};