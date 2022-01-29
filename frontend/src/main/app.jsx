// import '../common/template/dependencies'
import React from 'react'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import { HashRouter } from 'react-router'
import Routes from './routes'
import Messages from '../common/msg/messages'

export default props => (
    <HashRouter>
        <div className='wrapper'>
            <Header />
            <SideBar />
            <Routes />
            <Footer></Footer>
            <Messages></Messages>
        </div>
    </HashRouter>
)
