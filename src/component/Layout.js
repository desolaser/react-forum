import React from 'react'
import Header from 'header'
import NavBar from 'navBar'
import SideBar from 'sideBar'
import Footer from 'footer'

const Layout = () => {
    return (
        <div className="layout">
            <header className="">

            </header>
            <nav className="">

            </nav>
            <div>
                {props.children}
            </div>
            <div className="">

            </div>
            <footer className="">

            </footer>
        </div>
    )
}

export default Layout