import React from 'react'
import './app.scss'

import { BrowserRouter as Router, Route} from "react-router-dom"

import LoginPage from '../../pages/login-page/login-page'
import MainPage from '../../pages/main-page/main-page'

const App = () =>{
    return (
        <Router>
            <Route exact path='/' component={LoginPage}/>
            <Route path='/main-page' component={MainPage}/>
        </Router>
    )
}

export default App