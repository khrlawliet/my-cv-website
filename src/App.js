import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import ListEmployee from './components/Content/Portfoliio/CrudEmployee/ListEmployee';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__content">
          <Switch>
            <Route path='/' exact component={Content}/>
            <Route path='/employees' exact component={ListEmployee}/>
          </Switch>

        </div>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
