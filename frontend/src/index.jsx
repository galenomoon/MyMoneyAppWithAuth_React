import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//Middleware's
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import AuthOrApp from './main/authOrApp'
// import Routes from './main/routes'
import reducers from './main/reducers'

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers)
ReactDOM.render(
       <Provider store={store}>
              <AuthOrApp />
       </Provider>
       , document.getElementById('app'))