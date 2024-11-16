"use strict";

import * as model from './Model.js';
import { renderTaskList } from './View.js';

function markCompleteCallback(task) {
    model.markComplete(task.id);
    renderTaskView();
}

export function renderTaskView() {
    const tasksRoot = document.getElementById('tasks-root');
    tasksRoot.innerHTML = '';
    const taskListElement = renderTaskList(markCompleteCallback);
    tasksRoot.appendChild(taskListElement);
}

document.getElementById('add-task-button').addEventListener('click', () => {
    const inputElement = document.getElementById('task-input');
    const taskDescription = inputElement.value.trim();
    if (taskDescription !== '') {
        model.addTask(taskDescription);
        inputElement.value = '';
        renderTaskView();
    }
});