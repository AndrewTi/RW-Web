import React from 'react'
import './main-page.scss'

import Navigation from '../../components/navigation/navigation'

const MainPage = () =>{
    return (
        <div className="main_page">
            <Navigation/>
            <section className="main_content">
                <div className="main_head"></div>
            </section>
        </div>
    )
}

export default MainPage