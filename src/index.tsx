import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { RouterStore as _RouterStore } from 'mobx-react-router'
import { BrowserRouter } from 'react-router-dom'
import Provider from './provider'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

declare global {
  interface RouterStore extends _RouterStore {}
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App children={React.Children}/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
