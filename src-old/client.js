import {createStore} from 'redux'
import * as ReactDOM from 'react-domq'
import {reducers} from './reducer/reducers.js'

const store = createStore(reducers)

store.subscribe(() => {
    console.log("store change", store.getState())
})
