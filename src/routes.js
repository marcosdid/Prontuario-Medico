import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Form from './pages/form-prontuario'
import List from './pages/list-prontuario'

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
