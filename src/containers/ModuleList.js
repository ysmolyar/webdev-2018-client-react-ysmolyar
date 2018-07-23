import React from "react";
import ModuleListItem from "../components/ModuleListItem";

class ModuleList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.courseTitle}</h1>
                <ul className="list-group">
                    <ModuleListItem title="Module 1"/>
                    <ModuleListItem title="Module 2"/>
                    <ModuleListItem title="Module 3"/>
                    <ModuleListItem title="Module 4"/>
                </ul>
            </div>
        )
    }
}

export default ModuleList;