import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import "../styles.css";
import "../styles/CourseList.css"
import CourseManager from "./CourseManager";
import ModuleList from "./ModuleList";
import CourseEditor from "./CourseEditor";
import WhiteBoardHeader from "./WhiteBoardHeader";
import ModuleEditor from "./ModuleEditor";


export default class WhiteBoard extends React.Component {





    render() {
        return (

            <div>

                <WhiteBoardHeader/>
                <br/>

                <Router>
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path='/'
                                   component={CourseManager}/>
                            <Route exact path='/courses'
                                   component={CourseManager}/>
                            <Route path='/course/:courseId'
                                   component={CourseEditor}/>
                            <Route path='/course/:courseId/module/:moduleId'
                                   component={ModuleEditor}/>
                        </Switch>
                    </div>
                </Router>

            </div>
        )

    }
}