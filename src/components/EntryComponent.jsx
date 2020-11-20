import React, {Component} from'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Game from './Game'
import HomePage from './HomePage'


function EntryComponent(props){
        return(    
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/game" exact component={Game}/>
                </Switch>
            </Router>
)
}

export default EntryComponent;