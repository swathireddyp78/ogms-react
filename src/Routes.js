import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import GetCourses from './components/GetCourses';
import GetCoursesView from './components/GetCoursesView';
import GetEnrolls from './components/GetEnrolls';
import GetEnrollsView from './components/GetEnrollsView';
import GetStudents from './components/GetStudents';
import GetStudentsView from './components/GetStudentsView';
import WelcomeOgms from './components/WelcomeOgms';
import AwardAssistantship from './components/AwardAssistantship';
import GradeUpdateOgms from './components/GradeUpdateOgms';

const Routes = () => (
<BrowserRouter>
<Switch>
    <Route exact path='/' component={WelcomeOgms} />
    <Route exact path='/getcourses' component={GetCourses} />
    <Route exact path='/getcoursesview' component={GetCoursesView} />
    <Route exact path='/getenrolls' component={GetEnrolls} /> 
    <Route exact path='/getenrollsview' component={GetEnrollsView} />
    <Route exact path='/getstudents' component={GetStudents} /> 
    <Route exact path='/getstudentsview' component={GetStudentsView} />
    <Route exact path='/awardassistantship' component={AwardAssistantship} /> 
    <Route exact path='/gradeupdate' component={GradeUpdateOgms} />
</Switch>
</BrowserRouter>
);

export default Routes;