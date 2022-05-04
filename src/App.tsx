import React, { ReactNode } from 'react'
import { createHashHistory } from 'history'
import { Routes, Route } from 'react-router-dom'
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
      <Home></Home>
    </div>
  )
}

export default App
