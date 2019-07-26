import React from 'react'
import './main-page.scss'

import Navigation from '../../components/navigation/navigation'
import AppBar from '../../components/app-bar/app-bar'
import {Route} from 'react-router-dom'
import Collections from '../../components/collections/collections'

const MainPage = () =>{
    return (
        <div className="main_page">
            <Navigation/>
            <section className="main_content">
                <AppBar/>
                <Route path='/main-page/collections' render={()=><Collections />}/>
            </section>
        </div>
    )
}

export default MainPage