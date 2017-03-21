let tasks = []
export const taskReducer = (state={},action) => {
    switch(action.type) {
        case "INIT":
            state = {...state, taskList: [], finishedTasks: []}
            break
        case "ADD_TASK":
            let addTasks = [...state.taskList]
            if(addTasks.length > 0) {
                addTasks.push(action.payload)
            } else {
                addTasks = [action.payload]
            }
            state = {...state, taskList: addTasks}
            break
        case "REMOVE_TASK":
            let index = state.taskList.indexOf(action.payload)
            let newTasks = state.taskList.slice()
            newTasks.splice(index, 1)
            //delete newTasks[index]
            state = {...state, taskList: newTasks}
            break
        case "FINISH_TASK":
            let unfinished = [...state.taskList]
            let finishedIndex = unfinished.indexOf(action.payload)
            let finished = [...state.finishedTasks].concat(unfinished[finishedIndex])
            unfinished.splice(finishedIndex, 1)
            state = {...state, taskList: unfinished, finishedTasks: finished}
            break
    }
    return state
}
