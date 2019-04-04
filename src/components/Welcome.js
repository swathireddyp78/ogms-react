import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';

class Welcome extends Component {
render() {
    return (
        <div>
          <h1>Georgia State University - OGMS</h1>
          <NavLink to="/getstudents" >Get Students</NavLink>
          <br />
          <NavLink to="/getenrolls" >Get Enrolls</NavLink>
          <br />
          <NavLink to="/getcourses" >Get Courses</NavLink>
          <br />
          <NavLink to="/awardassistantship" >Assign Assistantship</NavLink>
          <br />
          <NavLink to="/gradeupdate" > Update Grade</NavLink>
        </div>
    );
}
}
export default Welcome;