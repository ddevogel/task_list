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
                state.user.id: action.payload[0],
                state.user.name: action.payload[1]
            }
        case 'ADD_TASK':
            let addTasks = [...state.user.tasks]
            if(addTasks.length) {
                addTasks.push(action.payload)
            } else {
                addTasks = [action.payload]
            }
            return {...state, tasks: addTasks}
        case 'FINISH_TASK':
            let incomp = [...state.tasks]
            let finIndex = incomp.indexOf(action.payload)
            let done = [...state.finished].concat(incomp[finIndex])
            incomp.splice(finIndex, 1)
            return {...state, tasks: incomp, finished: done}
    }
    return state
}
