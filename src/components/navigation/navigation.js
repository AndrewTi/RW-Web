import React from 'react'
import './navigation.scss'
import collections from './images/collections.svg'
import home from './images/home.svg'
import logout from './images/logout.svg'
import settings from './images/settings.svg'
import stat from './images/stat.svg'
import training from './images/training.svg'

import {Link} from 'react-router-dom'


 

const categoriesArray = [
    {name: "Home", img: home ,active: false},
    {name: "Collections", img: collections, active: true},
    {name: "Training", img: training,active: false},
    {name: "Statistics", img: stat , active: false},
    {name: "Settings", img: settings , active: false},
    {name: "Logout", img: logout,active: false},
]

const renderCat = categoriesArray.map((item)=>{
    return <Link to={`/main-page/${item.name.toLocaleLowerCase()}`}>
            <li>
                {item.name}
                <div className="cat_icon" style={{background: `url(${item.img})`}}></div>
                {item.active ? <div className="triangle"></div> : null}
            </li>
        </Link>
})

const Navigation  = () =>{
    return (
        <section className="navigation">
            <div className="logo_block">
                <div className="logo"></div>
                <div className="logo_text"></div>
            </div>
            <div className="nav_container">
                <ul>
                    {renderCat}
                </ul>
            </div>
            <div className="nav_container">
                <h4>Recent Collections</h4>
                <div className="recent_block">
                    <div className='recent_item'>Restaraunt</div>
                    <div className='recent_item'>Communication</div>
                    <div className='recent_item'>Business</div>
                    <div className='recent_item'>Education</div>
                </div>
            </div>
        </section>
    )
}

export default Navigation