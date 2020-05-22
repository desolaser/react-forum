import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Body from './Body'
import SideBar from './SideBar'
import Footer from './Footer'

const Layout = props => {
    return (
        <div className="layout">
            <Header/>
            <NavBar/>
            <Body>
                {props.children}
            </Body>
            <SideBar/>
            <Footer/>
        </div>
    )
}

export default Layout