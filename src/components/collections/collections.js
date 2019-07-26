import React from 'react'
import './collections.scss'
import plus from './plus.png'

const Collections = () =>{
    return <div className="collections_section">
        <div className="col_head">
            <div className="col_head_buttons">
            <button>All</button>
            <button>Projects</button>
            <button>Business</button>
            <button>Personal</button>
            </div>
            <div className="add_note">
                <div style={{background: `url("${plus}")`}} className="add_plus"></div>
                Add new note
            </div>
        </div>
    </div>
}

export default Collections