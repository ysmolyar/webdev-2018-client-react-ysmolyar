import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React, {Component} from "react";

import "../styles.css";
import "../styles/CourseList.css"

export default class WhiteBoard extends React.Component {

    render() {
        return (
        <div onClick={() => window.location.href = "/courses"}>
            <button className="btn-success" value="Go to Course Manager"></button>
        </div>
        )
    }

}