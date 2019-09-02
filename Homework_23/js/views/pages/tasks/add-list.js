import Utils from '../../../helpers/utils.js';

import Component from '../../../views/component.js';

import Tasks from '../../../models/tasks.js';

class AddAndList extends Component {
    render() {
        return new Promise(resolve => { //Добавляем разметку
            resolve(`     
                <h1 class="page-title">Tasks List</h1>
                
                <div class="task-add">
                    <input class="task-add__title" type="text" placeholder="Task title">
                    <textarea class="task-add__description" rows="5" cols="40"></textarea>
                    <button class="task-add__btn-add button" disabled>Add Task</button>
                    <button class="task-add__clear-tasks button" ${!this.tasks.length ? "disabled" : ""}>Clear all Tasks</button>
                </div>       
                <div class = "counterTasks">You have ${this.tasks.length} tasks</div>
                <div class="tasks">
                    <div class="tasks__list">
                        ${this.tasks.map(task => this.getTaskHTML(task)).join('\n ')}
                    </div>
                </div>            
            `);
        });
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const addTaskTitle = document.getElementsByClassName('task-add__title')[0],
            addTaskBtn = document.getElementsByClassName('task-add__btn-add')[0],
            clearTasksBtn = document.getElementsByClassName('task-add__clear-tasks')[0],
			tasksContainer = document.getElementsByClassName('tasks')[0],
            tasksList = document.getElementsByClassName('tasks__list')[0],
            counterTasks = document.getElementsByClassName('counterTasks')[0],
            descriptionTitle = document.getElementsByClassName('task-add__description')[0];

		addTaskTitle.addEventListener('keyup', () => addTaskBtn.disabled = !addTaskTitle.value.trim());
        addTaskBtn.addEventListener('click', () => this.addTask(addTaskTitle, addTaskBtn, tasksList, clearTasksBtn, counterTasks, descriptionTitle));
        clearTasksBtn.addEventListener('click', () => this.clearTaskList(tasksList, clearTasksBtn, counterTasks));

        this.countingTasks(counterTasks);
        
		tasksContainer.addEventListener('click', event => {
            const target = event.target,
                targetClassList = target.classList;

            if (targetClassList.contains('task') || targetClassList.contains('task__title')) {
                this.redirectToTaskInfo(target.dataset.id);
            }

            if (targetClassList.contains('task__btn-remove')) {
                this.removeTask(target.parentNode.parentNode, clearTasksBtn, counterTasks);
            }
        });
    }

    addTask(addTaskTitle, addTaskBtn, tasksList, clearTasksBtn, counterTasks, descriptionTitle) {
		const newTask = {
			id: Utils.generateID(),
			title: addTaskTitle.value.trim(),
            status: 'In Progress',
            description: descriptionTitle.value.trim()
		};
        
        this.tasks.push(newTask);
        console.log(this.tasks);
        Tasks.setTasksToLS(this.tasks);
      
		this.clearAddTask(addTaskTitle, addTaskBtn, descriptionTitle);

        tasksList.insertAdjacentHTML('beforeEnd', this.getTaskHTML(newTask));
        
        if (!!this.tasks.length) clearTasksBtn.disabled = false;

        this.countingTasks(counterTasks);
    }

    getTaskHTML(task) {
        return `
            <div class="task" data-id="${task.id}">
                <a class="task__title" data-id="${task.id}">${task.title}</a>
                
                <div class="task__buttons">
                    <a class="task__btn-edit button" href="#/task/${task.id}/edit">Edit</a> 
                    <a class="task__btn-done button">Done</a> 
                    <a class="task__btn-remove button">Remove</a>   
                </div>                            
            </div>
        `;
    }

    countingTasks(counterTasks) {
        if (this.tasks.length) {
            counterTasks.innerHTML = `You have ${this.tasks.length} tasks`;
        } else {
            counterTasks.innerHTML = `The task list is empty`
        } 
    }

    clearTaskList(tasksList, clearTasksBtn, counterTasks) {
        if (confirm('Are you sure?')) {
            tasksList.innerHTML = '';
            Tasks.setTasksToLS([]);
            this.tasks = [];
            clearTasksBtn.disabled = true;
            this.countingTasks(counterTasks);
        }
    }

    clearAddTask(addTaskTitle, addTaskBtn, descriptionTitle) {
        addTaskTitle.value = '';
        descriptionTitle.value = '';
        addTaskBtn.disabled = true;
    }

    redirectToTaskInfo(id) {
        location.hash = `#/task/${id}`;
    }

    removeTask(taskContainer, clearTasksBtn, counterTasks) {
        if (confirm('Are you sure?')) {
            this.tasks = this.tasks.filter(task => task.id !== taskContainer.dataset.id);
            Tasks.setTasksToLS(this.tasks);
            if (!this.tasks.length) clearTasksBtn.disabled = true;
            taskContainer.remove(); 
            
            this.countingTasks(counterTasks);
        }
    }
}

export default AddAndList;