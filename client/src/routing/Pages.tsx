import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import CreateJobPage from '../pages/CreateJobPage/CreateJobPage';
import JobsPage from '../pages/JobsPage/JobsListPage';
import VacancyPage from 'pages/VacancyPage/VacancyPage';
import ManageJobPage from 'pages/ManageJobPage/ManageJob';
import CVPage from 'pages/CVPage/CVPage';
import SandboxPage from 'pages/SandBoxPage/SandboxPage';

const Pages: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={CreateJobPage} />
            <Route exact path="/vacancy/:id" component={VacancyPage} />
            <Route exact path="/create" component={CreateJobPage} />
            <Route exact path="/manage-job/:id" component={ManageJobPage} />
            <Route exact path="/jobs" component={JobsPage} />
            <Route exact path="/candidate/:id" component={CVPage} />
            <Route exact path="/sandbox" component={SandboxPage} />
        </Switch>
    );
};

export default Pages
