export default class View {
	constructor(tasks) {
		tasks.forEach((task) => {
			this.renderTask(task);
		});
	}

	elements = {
		input: document.getElementById('todo-task'),
		form: document.getElementById('todo-form'),
		tasksList: document.getElementById('todo-task-list'),
	};

	renderTask(taskObject) {
		const completeClass = taskObject.status === 'done' ? 'completed' : '';
		const checked = taskObject.status === 'done' ? 'checked' : '';

		const taskHTML = `  <li class="todo-item" data-id="${taskObject.id}">
                                <label class="todo-item-label">
                                    <input class="todo-checkbox" type="checkbox" ${checked} />
                                    <span class="${completeClass}">${taskObject.text}</span>
                                    <button class="todo-btn todo-btn-secondary" data-delete>Удалить</button>
                                </label>
                            </li>`;

        if(taskObject.text === '') {
            return;
        }                        
		this.elements.tasksList.insertAdjacentHTML('beforeend', taskHTML);
	}

	clearInput() {
		this.elements.input.value = '';
	}

	changeStatus(taskObject) {
		const taskElement = this.elements.tasksList.querySelector(`[data-id="${taskObject.id}"]`);
		const taskTextEl = taskElement.querySelector('span');

		if (taskObject.status === 'done') {
			taskTextEl.classList.add('completed');
            taskElement.classList.add('completed');
		} else {
			taskTextEl.classList.remove('completed');
            taskElement.classList.remove('completed');
		}
	}

	removeTask(taskObject) {
        const taskElement = this.elements.tasksList.querySelector(`[data-id="${taskObject.id}"]`);
        taskElement.remove();
	}
}