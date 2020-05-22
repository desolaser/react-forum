import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Body from './Body'
import Footer from './Footer'

const Layout = props => {
    return (
        <div className="layout">
            <Header/>
            <NavBar/>
            <Body>
                {props.children}
            </Body>
            <Footer/>
        </div>
    )
}

export default Layout