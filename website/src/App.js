import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/home.jsx';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path ="/" component = {HomePage}/>
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
