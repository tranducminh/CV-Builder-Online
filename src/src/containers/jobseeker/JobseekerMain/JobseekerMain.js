import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Homepage from '../Homepage/Homepage';
import Menu from '../Menu/Menu';

class JobseekerMain extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Menu />
                <Switch>
                    <Route path='/' exact component={Homepage} />
                </Switch>
            </div>
        )
    }
}

export default JobseekerMain;