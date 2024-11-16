"use strict";

import initialTasks from "./task-data.js";

let currentTaskList = initialTasks.map((task, index) => {
    return {
        ...task,
        id: index + 1
    }
})

export function getIncompleteTasks() {
    return currentTaskList.filter(task => {
        return task.status == "incomplete";
    })
}

export function addTask(description) {
    let newTask = {
        description: description,
        status: "incomplete",
        id: currentTaskList.length + 1
    };
    currentTaskList = [...currentTaskList, newTask];
}

export function markComplete(id) {
    let copy = currentTaskList.map((task) => {
        if (task.id == id) {
            return { ...task, status: "complete" };
        }
        return { ...task };
    })
    currentTaskList = copy;
}