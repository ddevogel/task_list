import React from 'react'
import {connect} from 'react-redux'
import {addTask, removeTask, completeTask, init} from '../actions/taskActions'

@connect((store) => {
        return {
            user: store.user,
            tasks: store.tasks,
            finished: store.finished
        }
})

export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(init([0, 'Calvin']))
    }

    render() {
        const {user, tasks, finished} = this.props

        const mappedTasks = tasks.user.tasks.map(task => <li>{task}</li>)
        const mappedFinished = tasks.user.finished.map(finished => <li>{finished}</li>)

        return (
            <div>
                <h1>{user.name}</h1>
                <ol>{mappedTasks}</ol>
                <ol>{mappedFinished}</ol>
            </div>
        )
    }
}
