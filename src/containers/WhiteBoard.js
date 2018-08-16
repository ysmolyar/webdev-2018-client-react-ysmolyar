import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React from "react";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import "../styles.css";
import "../styles/CourseList.css"
import CourseList from "./CourseList";
import CourseEditor from "./CourseEditor";
import WhiteBoardHeader from "../components/WhiteBoardHeader";


export default class WhiteBoard extends React.Component {





    render() {
        return (

            <div>

                <WhiteBoardHeader/>

                <Router>
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path='/'
                                   component={CourseList}/>
                            <Route exact path='/courses'
                                   component={CourseList}/>
                            <Route path='/course/:courseId'
                                   component={CourseEditor}/>
                        </Switch>
                    </div>
                </Router>

            </div>
        )

    }
}