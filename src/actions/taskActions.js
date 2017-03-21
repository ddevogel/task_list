export function addTask(text) {
    return {
        type: 'ADD_TASK',
        payload: text
    }
}

export function finishTask(text) {
    return {
        type: 'FINISH_TASK',
        payload: text
    }
}

export function deleteTask(text) {
    return {
        type: 'DELETE_TASK',
        payload: text
    }
}

export function init(array) {
    return {
        type: 'INIT',
        payload: array
    }
}
