export function addTask(taskName) {
    return {
        type: 'ADD_TASK',
        payload: taskName
    }
}

export function deleteTask(taskName) {
    return {
        type: 'DELETE_TASK',
        payload: taskName
    }
}

export function completeTask(taskName) {
    return {
        type: 'COMPLETE_TASK',
        payload: taskName
    }
}

export function init() {
    return {
        type: 'INIT'
    }
}
