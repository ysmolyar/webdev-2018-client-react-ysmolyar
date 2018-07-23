import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';


class ModuleListItem extends React.Component {

    constructor(props) {super(props);}

    render() {
        return(
            <li className="list-group-item">
                {this.props.title}
                <span className="pull-right">
          <i style={{'marginRight': '5px'}} className="fa fa-times"></i>
        </span>
            </li>
        )
    }
}

export default ModuleListItem;