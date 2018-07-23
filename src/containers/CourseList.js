import React, {Component} from "react";
import ModuleListItem from "../components/ModuleListItem";
import CourseServiceClient from '../services/CourseServiceClient'

class CourseList extends React.Component {

    constructor() {
        super();
        this.state = {
            modules: [
                {title: 'Module 1 - jQuery', id: 123},
                {title: 'Module 2 - React', id: 234},
                {title: 'Module 3 - Redux', id: 345},
                {title: 'Module 4 - Angular', id: 456},
                {title: 'Module 5 - Node.js', id: 567},
                {title: 'Module 6 - MongoDB', id: 678},]};}


    renderListOfModules() {
        let modules = this.state.modules
            .map(function(module){
                return <ModuleListItem
                    title={module.title} key={module.id}/>
            });
        return modules;}


    render() {
        return (
            <div>
                <ul className="col-sm-10 courseList list-group container-fluid" >
                    {this.renderListOfModules()}
                </ul>
            </div>
        )
    }
}
export default CourseList;





