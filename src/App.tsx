import React, { ReactNode } from 'react'
import { createHashHistory } from 'history'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { syncHistoryWithStore } from 'mobx-react-router'
import * as store from '@store/index'
import 'moment/locale/ko'
import 'antd/dist/antd.min.css'
import Header from './layout/Header'
import Footer from '@layout/Footer'
import { Layout } from 'antd'
import './App.css'
import { loadComponent } from '@layout/menu'
import Info from '@pages/Info'
import Work from '@pages/Work'
import Profile from '@pages/Profile'
import Notice from '@pages/Notice'
import Service from '@pages/Service'
import Guide from '@pages/Guide'
import Reservation from '@pages/Reservation'
import Fare from '@pages/Fare'
import SignUp from '@pages/Sign'
import Recruitment from '@pages/Recruitment'



interface IAppProps {
  children: ReactNode
}

const hashHistory = createHashHistory()
const history = syncHistoryWithStore(hashHistory, store.routerStore)

const Home = loadComponent(() => import(/* webpackChunkName: "Home" */ '@pages/Home'))
const Login = loadComponent(() => import(/* webpackChunkName: "Home" */ '@pages/Login'))

const App: React.FC<IAppProps> = (props: IAppProps) => {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Guide' element={<Guide />} />
        <Route path='/Reservation' element={<Reservation />} />
        <Route path='/Fare' element={<Fare />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Sign' element={<SignUp />} />
        <Route path='/Recruitment' element={<Recruitment />} />
      </Routes>
      <Footer></Footer>
    </div>


  )
}

export default App
