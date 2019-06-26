
import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import PhotoForm from './components/PhotoForm'
import Navbar from './components/Navbar'
import Winners from './components/Winners'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import { BrowserRouter, Route} from 'react-router-dom'


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

ReactDOM.render(
    <Provider store={store} >
      <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component={App} />
        <Route exact path="/photo/new" component={PhotoForm} />
        <Route exact path="/winners" component={Winners} />
      </React.Fragment>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
