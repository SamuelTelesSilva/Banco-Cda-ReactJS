import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from './components/Layout';
import ConsultarSaldo from './components/paginas/ConsultarSaldo';
import Depositar from './components/paginas/Depositar';
import Sacar from './components/paginas/Sacar';

function Routes(){
    return(
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Layout}/>
              <Route path="/consultar-saldo" component={ConsultarSaldo}/> 
              <Route path="/sacar" component={Sacar}/>
              <Route path="/depositar" component={Depositar}/>
              
          </Switch>
      </BrowserRouter> 
    );
};
export default Routes;