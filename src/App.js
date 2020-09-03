import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import ListEmployee from './components/Content/Portfoliio/CrudEmployee/ListEmployee';
import UpdateEmployee from './components/Content/Portfoliio/CrudEmployee/CreateOrUpdateEmployee';
import ViewEmployeeDetails from './components/Content/Portfoliio/CrudEmployee/ViewEmployeeDetails';
import SlackClone from './components/Content/Portfoliio/SlackClone/SlackClone';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__content">
          <Switch>
            <Route path='/' exact component={Content}/>
            <Route path='/add-employee/:id' exact component={UpdateEmployee}/>
            <Route path='/view-employee/:id' exact component={ViewEmployeeDetails}/>
            <Route path='/employees' exact component={ListEmployee}/>
            <Route path='/slackclone' exact component={SlackClone}/>
          </Switch>

        </div>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
