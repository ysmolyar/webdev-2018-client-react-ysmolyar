import React from "react";

class CourseList extends React.Component {
    render() {
        return (
            <div>
                <h1>Course List</h1>
                <ul className="list-group">
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
//
// formChanged = (event) => {
//     console.log(event.target.value);
//     this.setState({newCourse: {
//         title: event.target.value
//         }})
// };
//
// createCourse = () => {
//     this.courseService.createCourse(this.state.newCourse)
//         .then((course) => this.courseService.findAllCourses())
//         .then(courses => {this.setState({courses: courses})})
// };

