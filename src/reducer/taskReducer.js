export default function reducer(state={
    user: {
        id: null,
        name: null
    },
    tasks: [],
    finished: [],
    error: null
}, action) {
    let {index, newTasks} = null
    switch(action.type) {
        case 'INIT':
            return {
                ...state,
                user: {
                    ...state.user,
                    id: action.payload[0],
                    name: action.payload[1]
                }
            }
        case 'ADD_TASK':
            newTasks = [...state.tasks]

            if(newTasks.length) {
                newTasks.push(action.payload)
            } else {
                newTasks = [action.payload]
            }

            return {
                ...state,
                tasks: [newTasks]
            }
        case 'FINISH_TASK':
            newTasks = [...state.tasks]
            index = newTasks.indexOf(action.payload)
            let done = [...state.finished].concat(newTasks[index])
            newTasks.splice(index, 1)
            index = null

            return {
                ...state,
                tasks: newTasks,
                finished: done
            }
        case 'DELETE_TASK':
            newTasks = [...state.tasks]
            index = newTasks.indexOf(action.payload)
            newTasks.splice(index, 1)

            return {
                ...state,
                tasks: newTasks
            }
    }
}
