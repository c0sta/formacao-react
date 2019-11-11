import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Sobre from './components/Sobre/Sobre'
import Livros from './components/Livros/Livros'
import Autores from './components/Autores/Autores'
import NotFound from './components/NotFound/NotFound'
import Precos from './components/Precos/Precos'



import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/livros" component={Livros} />
        <Route path="/autores" component={Autores} />
        <Route path="/precos" component={Precos} />

        <Route component={NotFound} />
    </Switch>

</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
