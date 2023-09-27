import React from 'react'
import { createRoot } from 'react-dom/client'

import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'normalize.css'
import './app/index.css'

import { store } from './entities/store'
import App from './pages/App'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
