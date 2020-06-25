import React from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.sass';
import Index from './pages/index/Index';
import Show from './pages/show/Show';
import Create from './pages/create/Create';
import Update from './pages/update/Update';

function App() {
    return (
            <Router className="root">
                <header>
                    <Link to={'/movie/create'}>
                        Create
                    </Link>
                </header>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/movies/:id" exact component={Show} />
                    <Route path="/movie/create" exact component={Create} />
                    <Route path="/movies/:id/edit" component={Update} />
                </Switch>
            </Router>
    );
}

export default App;
