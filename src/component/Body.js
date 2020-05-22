import React from 'react'
import SideBar from './SideBar'

const Body = props => {
    return (
        <div className="body">
            <div>
                {props.children}
            </div>
            <SideBar/>
        </div>
    )
}

export default Body