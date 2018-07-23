import React from "react";
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {

    constructor(props) {super(props);}

    render() {
        return (
            <div>
                <h1>Module List</h1>
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