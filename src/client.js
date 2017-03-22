import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import Layout from './components/Layout'
import store from './store'

const app = document.getElementById('app')

store.dispatch({type:'ADD_TASK',payload:'Test'})
store.dispatch({type:'ADD_TASK',payload:'Test2'})
store.dispatch({type:'COMPLETE_TASK',payload:'Test'})

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>, app
)
