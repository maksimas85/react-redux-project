import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './Components/App/App'
import ErrorBoundry from './Components/ErrorBoundry/ErrorBoundry'
import BookStoreService from './Services/BookStoreService'
import {BookStoreServiceProvider} from './Components/bookStoreServiceContext/BookStoreServiceContext'

import store from './store'

const bookStoreService = new BookStoreService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookStoreServiceProvider value={bookStoreService}>
                <Router>
                    <App />
                </Router>
            </BookStoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
)