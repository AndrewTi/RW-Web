import React from 'react'
import './navigation.scss'
import collections from './images/collections.svg'
import home from './images/home.svg'
import logout from './images/logout.svg'
import settings from './images/settings.svg'
import stat from './images/stat.svg'
import training from './images/training.svg'


 

const categoriesArray = [
    {name: "Home", img: home},
    {name: "Collections", img: collections},
    {name: "Training", img: training},
    {name: "Statistics", img: stat},
    {name: "Settings", img: settings},
    {name: "Logout", img: logout},
]

const renderCat = categoriesArray.map((item)=>{
    return <li>
            {item.name}
            <div className="cat_icon" style={{background: `url(${item.img})`}}></div>
        </li>
})

const Navigation  = () =>{
    return (
        <section className="navigation">
            <div className="logo_block">
                <div className="logo"></div>
                <div className="logo_text"></div>
            </div>
            <div className="categories_list">
                <ul>
                    {renderCat}
                </ul>
            </div>
        </section>
    )
}

export default Navigation