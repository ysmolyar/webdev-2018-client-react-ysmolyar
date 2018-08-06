import React from "react";
import { Link } from 'react-router-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';


export default class LessonTabItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className="list-group-item">
                <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                    {this.props.lesson.title}
                </Link>
                <span className="pull-right">
          <i style={{'marginRight': '5px'}} className="fa fa-times"
             onClick={() => {this.props.delete(this.props.lesson.id);}}></i>
                </span>
            </li>
        )
    }
}