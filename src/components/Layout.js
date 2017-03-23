import React from 'react'
import {connect} from 'react-redux'

@connect((store) => {
    return {
        tasks: (store) ? store.tasks : [],
        finished: (store) ? store.finished : []
    }
})

export default class Layout extends React.Component {

    render() {
        const {tasks, finished} = this.props

        const mapTasks = tasks.map(task => <li>{task}</li>)
        const mapFinished = finished.map(finished => <li>{finished}</li>)

        return (
            <div>
                <p>Tasks</p>
                <ul>{mapTasks}</ul>
                <p>Finished</p>
                <ul>{mapFinished}</ul>
                <div id="buttons">
                    <input type="text" id="addBox" />
                    <input type="submit" value="Add Task" /><br/>
                    <input type="text" id="finishBox" />
                    <input type="submit" value="Complete Task" /><br/>
                    <input type="text" id="deleteBox" />
                    <input type="submit" value="Delete Task" /><br/>
                </div>
            </div>
        )
    }
}
