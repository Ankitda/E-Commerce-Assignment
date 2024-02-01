// imorted all the Needed Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Provider } from 'react-redux'

// imported all the neccessary components
import App from './App.jsx'
import PersonalDetail from './components/form/PersonalDetail.jsx'
import CreditCardDetails from './components/form/CreditCardDetails.jsx'
import Information from './components/Information.jsx'
import Hero from './components/Hero.jsx'
import ProductFilter from './components/ProductFilter.jsx'
import ErrorPage from './components/ErrorPage.jsx'

//imported the store of redux toolkit
import { store } from './store/index.js'

//imported styles
import './index.css'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
      <Route path='home' element={<Hero />} />
      <Route path='contact' element={<PersonalDetail />} />
      <Route path='cardDetails' element={<CreditCardDetails />} />
      <Route path='showDetails' element={<Information />} />
      <Route path='store' element={<ProductFilter />} />
    </Route>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>,
)
