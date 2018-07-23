import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React, {Component} from "react";
import CourseServiceClient from '../services/CourseServiceClient'
import CourseRow from "../components/CourseRow";
import { Link } from 'react-router-dom';
import "../styles.css";
import "../styles/CourseList.css"

export default class WhiteboardHeader extends React.Component {

    render() {
        return (
            <div>
                <div className="row navbar courseManagerHeaderSettingsBtn">
                    <span className="col col-sm-3" id="courseManagerHeaderSettingsSpan">
                        <h4 className="courseManagerTitle">WhiteBoard</h4>
                    </span>
                    <span className="col col-sm-8 float-left addCourseFldAndBtn">
                        <input className="form-control addCourseFld" placeholder="New Course Title"
                               onChange={this.titleChanged}/>
                        <span className="fa-stack newCourseBtn" onClick={this.createCourse}>
                        <i className="fa fa-2x fa-circle fa-stack-2x icon-a"></i>
                        <i className="fa fa-2x fa-plus-circle fa-stack-2x icon-b"></i>
                    </span>
                        </span>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}