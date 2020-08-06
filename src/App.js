import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import './App.css';
import AddPost from './components/AddPost';
import Projects from './components/Projects';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/admin/Login';
import Project from './components/Project';
import Home from './components/Home';
import NotFound from './components/404';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/addProject" component={AddPost} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/admin" component={Login} />
            <Route exact path="/project/:id" component={Project} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
