import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import FAQ from '../FAQ/FAQ';
import List from '../List/ListContainer';



const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/FAQ' component={FAQ} />
        <Route exact path="/list/:id" component={List} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
  
);

export default App;