//react
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

//redux
import {store} from './store/store'

//components
import App from './App'

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

render(app, document.getElementById('root'))

