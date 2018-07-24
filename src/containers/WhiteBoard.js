import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React, {Component} from "react";
import {Link} from 'react-router-dom';


import "../styles.css";
import "../styles/CourseList.css"

export default class WhiteBoard extends React.Component {

    render() {
        return (
            <Link to={`/courses`}>
            <button className="btn-success">Go to Course Manager</button>
            </Link>
        )
    }

}