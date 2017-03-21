import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import Layout from './components/Layout'
import store from './store'

const app = document.getElementById('app')
// store.dispatch({type:'INIT', payload:[0,'Calvin']})

// store.dispatch({type:'ADD_TASK', payload:'Get this working'})
// store.dispatch({type:'ADD_TASK', payload:'Add buttons for this'})
// store.dispatch({type:'FINISH_TASK', payload:'Get this working'})

ReactDOM.render(<Provider store={store}>
    <Layout />
    </Provider>, app)
