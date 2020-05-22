import React from 'react'
import Header from 'header'
import NavBar from 'navBar'
import SideBar from 'sideBar'
import Footer from 'footer'

const Layout = () => {
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