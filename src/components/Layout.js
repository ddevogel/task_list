import React from 'react'
import {connect} from 'react-redux'

import {addTask, finishTask, deleteTask, init} from '../actions/taskActions'
import task from '../reducer/taskReducer'

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
        console.log('Successfully initialized user')
    }

    addTask(text) {
        this.props.dispatch(addTask(text))
    }

    render() {
        const {user, tasks} = this.props

        const mappedTasks = tasks.user.tasks.map(task => <li>{task}</li>)
        const mappedFinished = tasks.user.finished.map(finished => <li>{finished}</li>)

        return <div>
            <h1>{tasks.user.name}</h1>
            <h2>Incomplete Tasks</h2>
            <ol>{mappedTasks}</ol>
            <div id="input">
                <div id="add">
                    <form id="addTask" >
                        <label>Add Task:<br />
                            <input type="text" name="newTask" id="addBox" />
                        </label>
                        <input type="submit" value="Add" />
                    </form>
                </div>
                <div id="finish">
                <form id="finishTask">
                    <label>Complete Task:<br />
                        <input type="text" name="completeTask" />
                    </label>
                    <input type="submit" value="Complete" />
                </form>
                </div>
                <div id="remove">
                <form id="removeTask">
                    <label>Delete Task:<br />
                        <input type="text" name="deleteTask" />
                    </label>
                    <input type="submit" value="Remove" />
                </form>
                </div>
            </div>
            <h2>Completed Tasks</h2>
            <ol>{mappedFinished}</ol>
        </div>
    }
}
