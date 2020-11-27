import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import VacancyPage from '../pages/VacancyPage/VacancyPage';
import CreateJobPage from '../pages/CreateJobPage/CreateJobPage';

const Pages: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/vacancy" component={VacancyPage} />
            <Route exact path="/create" component={CreateJobPage} />
            <Route exact path="/edit" component={HomePage} />
            <Route exact path="/manage" component={HomePage} />
        </Switch>
    );
};

export default Pages
