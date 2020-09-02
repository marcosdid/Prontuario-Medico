import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Form from './pages/form-prontuario'
import List from './pages/list-prontuario'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={List} exact />
        <Route path='/cadastro' component={Form} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
