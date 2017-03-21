import React from 'react'
import {connect} from 'react-redux'

@connect((store) => {
        return {
            user: store.user,
            tasks: store.tasks,
            finished: store.finished
        }
})

export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch({type:'INIT', payload: [0,'Calvin']})
    }

    render() {
        const {user, tasks, finished} = this.props
    }
}
