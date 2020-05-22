import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Footer from './Footer'

const Layout = props => {
    return (
        <div className="layout">
            <Header/>
            <NavBar/>
            <div>
                {props.children}
            </div>
            <SideBar/>
            <Footer/>
        </div>
    )
}

export default Layout