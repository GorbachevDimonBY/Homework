import Utils from '../helpers/utils.js';

import Tasks from '../models/tasks.js';

class Component {
    constructor() {
        this.request = Utils.parseRequestURL(); //записываем с файла Utils объект request в переменную этого файла
        this.tasks = new Tasks().getTasksFromLS(); //перезаписывается массив в tasks и получаем LS
    }

    afterRender() {}
}

export default Component;