import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Form from './pages/FormProntuario'
import List from './pages/ListProntuario'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Form} />
        <Route path='/cadastro' component={List} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
