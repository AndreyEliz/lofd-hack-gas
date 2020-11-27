import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import CreateJobPage from '../pages/CreateJobPage/CreateJobPage';
import JobsPage from '../pages/JobsPage.tsx/JobsListPage';

const Pages: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/create" component={CreateJobPage} />
            <Route exact path="/edit" component={HomePage} />
            <Route exact path="/jobs" component={JobsPage} />
        </Switch>
    );
};

export default Pages
