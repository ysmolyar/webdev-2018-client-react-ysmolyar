import React, {Component} from "react";
import ModuleListItem from "../components/ModuleListItem";
import CourseServiceClient from '../services/CourseServiceClient'

class CourseList extends React.Component {
    // var courseService = new CourseServiceClient;

    constructor(props) {super(props);}

    // createCourse = () => {
    //     this.courseService.createCourse(this.state.newCourse)
    //         .then((course) => this.courseService.findAllCourses())
    //         .then(courses => {this.setState({courses: courses})})
    // };

    render() {
        return (
            <div>
                <ul className="list-group container-fluid" >
                    <ModuleListItem title="Course 1"/>
                    <ModuleListItem title="Course 2"/>
                    <ModuleListItem title="Course 3"/>
                    <ModuleListItem title="Course 4"/>
                </ul>
            </div>
        )
    }
}
export default CourseList;





