import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main';
import About from './../router1/About';
import Info from './info';
import Topic from './../router1/Topic';
import Home from './Home';
import NoMatch from './NoMatch';

export default class IRoute extends React.Component{
    render() {
        return (
        <Router>
            <Home>
                <Switch>
                    <Route path="/main" render={() => 
                    <Main>
                        {/* <Route path="/a" component={About}></Route> */}
                        <Route path="/main/:mianId" component={Info}></Route>
                    </Main>
                    }></Route>
                    {/* <Route path="/" component={Main}></Route> */}
                    <Route path="/about" component={About}></Route>
                    <Route path="/topic" component={Topic}></Route>
                    <Route component={NoMatch}></Route>
                </Switch>
            </Home>
        </Router>
        )
    }
}