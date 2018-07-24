import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react'
import CourseCard from '../components/CourseCard'
import CourseEditor from './CourseEditor';
import CourseList from "./CourseList";
import WhiteBoard from "./WhiteBoard";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default class CourseManager extends Component {
    render() {
        return (
                <Router>
                    <Switch>
                        <Route path="" component={WhiteBoard}></Route>
                        <Route path="/courses"
                               component={CourseList}>
                        </Route>
                        <Route path="/course/:courseId/"
                               component={CourseEditor}>
                        </Route>
                    </Switch>
                </Router>
        )
    }
}
