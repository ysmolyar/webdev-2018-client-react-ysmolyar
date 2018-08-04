import React from "react";
import { Link } from 'react-router-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';


export default class ModuleListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className="list-group-item">
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.module.title}
                </Link>
                <span className="pull-right">
          <i style={{'marginRight': '5px'}} className="fa fa-times"
                            onClick={() => {this.props.delete(this.props.module.id);}}></i>
                </span>
            </li>
        )
    }
}