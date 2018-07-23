import React, {Component} from "react";
import ModuleListItem from "../components/ModuleListItem";
import CourseServiceClient from '../services/CourseServiceClient'
import CourseRow from "../components/CourseRow";
import "../styles.css";
import "../styles/CourseList.css"

class CourseList extends React.Component {

    constructor() {
        super();
        this.courseServiceClient = CourseServiceClient.instance;
        this.state = {courses: []};
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
    }
                // {title: 'Module 1 - jQuery', id: 123},
                // {title: 'Module 2 - React', id: 234},
                // {title: 'Module 3 - Redux', id: 345},
                // {title: 'Module 4 - Angular', id: 456},
                // {title: 'Module 5 - Node.js', id: 567},
                // {title: 'Module 6 - MongoDB', id: 678},]};}


    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses() {
        this.courseServiceClient.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
                console.log(courses);
            });
    }

    titleChanged(event) {
        this.setState({
            course: { title: event.target.value }
        });
    }

    createCourse() {
        console.log("Created course!");
        this.courseServiceClient.createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });
    }

    renderCourseRows() {
        let courses = null;

        console.log("render course rows")
        console.log(this.state)
        if(this.state) {
            courses = this.state.courses.map(
                function (course) {
                    return <CourseRow key={course.id}
                                      course={course}/>
                }
            )
        }
        return (
            courses
        )
    }



    render() {
        return (
            <div>
                <div className="row navbar courseManagerHeaderSettingsBtn">
                    <span className="col col-sm-3" id="courseManagerHeaderSettingsSpan">
                        <i className="fa fa-2x fa-bars" id="courseManagerHeaderSettingsIcon"></i>
                        <h4 className="courseManagerTitle">Course Manager</h4>
                    </span>
                    <span className="col col-sm-8 float-left addCourseFldAndBtn" onClick={this.createCourse}>
                        <input className="form-control addCourseFld" placeholder="New Course Title"
                               onChange={this.titleChanged}/>
                        <span className="fa-stack newCourseBtn">
                        <i className="fa fa-2x fa-circle fa-stack-2x icon-a"></i>
                        <i className="fa fa-2x fa-plus-circle fa-stack-2x icon-b"></i>
                    </span>
                        </span>
                </div>
                <span className="row courseListHeader">
                        <span className="col-sm-1"><b>Title</b></span>
                        <span className="col-sm-5"><b>Owned By</b></span>
                        <span className="col-sm-1"><b>Last Modified</b></span>
                </span>
                <br/>
                <ul className="col-sm-10 courseList list-group container-fluid" >
                    {this.renderCourseRows()}
                </ul>
            </div>
        )
    }
}
export default CourseList;





