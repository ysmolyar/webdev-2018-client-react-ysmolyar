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
                <ul className="col-sm-10 courseList list-group container-fluid" >
                    <ModuleListItem title="Course 1"/>
                    <ModuleListItem title="Course 2"/>
                    <ModuleListItem title="Course 3"/>
                    <ModuleListItem title="Course 4"/>
                    <ModuleListItem title="Course 5"/>
                    <ModuleListItem title="Course 6"/>
                    <ModuleListItem title="Course 7"/>
                    <ModuleListItem title="Course 8"/>
                    <ModuleListItem title="Course 9"/>
                    <ModuleListItem title="Course 10"/>
                    <ModuleListItem title="Course 11"/>
                    <ModuleListItem title="Course 12"/>
                    <ModuleListItem title="Course 13"/>
                    <ModuleListItem title="Course 14"/>
                    <ModuleListItem title="Course 15"/>
                    <ModuleListItem title="Course 16"/>
                    <ModuleListItem title="Course 17"/>
                    <ModuleListItem title="Course 18"/>
                    <ModuleListItem title="Course 19"/>
                    <ModuleListItem title="Course 20"/>
                </ul>
            </div>
        )
    }
}
export default CourseList;





