var btn = document.getElementsByClassName('btn')[0],
    minutes = document.getElementsByClassName('numbers')[0],
    seconds = document.getElementsByClassName('numbers')[1],
    milliseconds = document.getElementsByClassName('numbers')[2],
    block = document.getElementsByClassName('block')[0],
    reset = document.getElementsByClassName('reset')[0],
    save = document.getElementsByClassName('save')[0],
    value = document.getElementsByClassName('value')[0],
    a = '00',
    b = '00',
    c = '00',
    number = 0;

milliseconds.innerHTML = a;
seconds.innerHTML = b;
minutes.innerHTML = c;


btn.addEventListener('click', function () {
    var TimeId = setInterval(startMilliseconds, 10);

    if (btn.dataset.btnState == 'start') {
        btn.dataset.btnState = 'stop';
        btn.innerHTML = 'Stop';
        reset.classList.remove('none');
        save.classList.remove('none');
        reset.classList.add('dop');
        save.classList.add('dop');


    } else if (btn.dataset.btnState == 'stop') {
        btn.dataset.btnState = 'run';
        btn.innerHTML = 'Run';


    } else if (btn.dataset.btnState == 'run') {
        btn.dataset.btnState = 'stop';
        btn.innerHTML = 'Stop';
    }

    function startMilliseconds() {
        if (btn.dataset.btnState == 'run') {
            clearInterval(TimeId);
        }
        a++;
        if (+a == 100) {
            a = '00';
            milliseconds.innerHTML = a;
            b++;
            startSeconds();
        }
        if (+a < 10) {
            a = '0' + a++;
            milliseconds.innerHTML = a;
        }
        milliseconds.innerHTML = a;
    }

    function startSeconds() {
        if (+b == 60) {
            b = '00';
            seconds.innerHTML = b;
            c++;
            startMinutes();
        }
        if (+b < 10) {
            b = '0' + b++;
            seconds.innerHTML = b;
        }
        seconds.innerHTML = b;
    }

    function startMinutes() {
        if (+c < 10) {
            c = '0' + c++;
            minutes.innerHTML = c;
        }
        minutes.innerHTML = c;
        if (+c == 60) {
            clearInterval(TimeId);
            save.classList.remove('dop');
            btn.classList.add('none');
            btn.innerHTML = 'start';
            minutes.classList.add('stop');
            seconds.classList.add('stop');
            milliseconds.classList.add('stop');
        }
    }
    reset.addEventListener('click', function () {
        btn.dataset.btnState = 'start';
        a = '00';
        milliseconds.innerHTML = a;
        b = '00';
        seconds.innerHTML = b;
        c = '00';
        minutes.innerHTML = c;
        btn.innerHTML = 'Start';
        reset.classList.add('none');
        save.classList.add('none');
        btn.classList.remove('none');
        value.innerHTML = '';
        clearInterval(TimeId);
        number = 0;
        minutes.classList.remove('stop');
        seconds.classList.remove('stop');
        milliseconds.classList.remove('stop');
    })
});

save.addEventListener('click', function () {
    number++;
    var p = document.createElement('p');
    p.innerText = number + ') ' + c + ' : ' + b + ' : ' + a;
    value.appendChild(p);
})