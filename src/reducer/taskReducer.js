export default function reducer(state={
    user: {
        id: null,
        name: null,
        tasks: [],
        finished: []
    },
    error: null
}, action) {
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
            let addTasks = [...state.user.tasks]
            if(addTasks.length) {
                addTasks.push(action.payload)
            } else {
                addTasks = [action.payload]
            }
            return {
                ...state,
                user: {
                    ...state.user,
                    tasks: addTasks
                }
            }
        case 'FINISH_TASK':
            let incomp = [...state.user.tasks]
            let finIndex = incomp.indexOf(action.payload)
            let done = [...state.user.finished].concat(incomp[finIndex])
            incomp.splice(finIndex, 1)
            return {
                ...state,
                user: {
                    ...state.user,
                    tasks: incomp,
                    finished: done
                }
            }
        case 'DELETE_TASK':
            let index = state.user.tasks.indexOf(action.payload)
            let newTasks = state.user.tasks.slice()
            newTasks.splice(index, 1)
            return {
                ...state,
                user: {
                    ...state.user,
                    tasks: newTasks
                }
            }
    }
    return state
}
