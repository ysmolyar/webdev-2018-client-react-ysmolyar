import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React, {Component} from "react";
import CourseServiceClient from '../services/CourseServiceClient'
import CourseRow from "../components/CourseRow";
import "../styles.css";
import "../styles/CourseList.css"

class CourseList extends React.Component {

    constructor() {
        super();
        this.courseServiceClient = CourseServiceClient.instance;
        this.state = {
            courses: [],
            course: {
                title: '',
                id: ''}
        };
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);

    };

    renderCourseRows() {
        return this.state.courses.map((course) => {
            return <CourseRow course={course} key={course.id} delete={this.deleteCourse}/>;
        });
    }


    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses() {
        this.courseServiceClient.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
                this.setState({course: {title:''}});
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
        if (this.state.course.title === '' || this.state.course === undefined) {

            this.setState({course: {title: "New Course"}}, function () {
                return this.courseServiceClient.createCourse(this.state.course).then(this.findAllCourses);
            });
        }
        else {
            this.courseServiceClient.createCourse(this.state.course).then(this.findAllCourses);
        }

    }


    deleteCourse(courseId) {

        let popupResponse = window.confirm("Are you sure you want to delete this course?");

        if (popupResponse === true) {
            this.courseServiceClient.deleteCourse(courseId)
                .then(() => {this.findAllCourses();
            });
        }
    }

    render() {
        return (
            <div>
                <div className="row navbar courseManagerHeaderSettingsBtn">
                    <span className="col col-sm-3" id="courseManagerHeaderSettingsSpan">
                        <i className="fa fa-2x fa-bars" id="courseManagerHeaderSettingsIcon"></i>

                        <h4 className="courseManagerTitle">Course Manager</h4>
                    </span>
                    <span className="col col-sm-8 float-left addCourseFldAndBtn">
                        <input className="form-control addCourseFld" placeholder="New Course Title"
                               onChange={this.titleChanged}/>
                        <span className="fa-stack newCourseBtn" onClick={this.createCourse}>
                        <i className="fa fa-2x fa-circle fa-stack-2x icon-a"></i>
                        <i className="fa fa-2x fa-plus-circle fa-stack-2x icon-b"></i>
                    </span>
                        </span>
                    <div>
                        <span className="row navbar header">
                        <p className="col-4 title"><b>Title</b></p>
                        <p className="col-1 ownedBy"><b>Owned By</b></p>
                        <p className="col-4 lastModified"><b>Last Modified</b></p>
                         </span>
                    </div>
                </div>
                <table className="container-fluid table-responsive table-striped table-hover" >
                    <tbody className="col-sm-10 courseList list-group container-fluid">

                    {this.renderCourseRows()}
                    </tbody>
                </table>
                </div>
        )
    };
}


export default CourseList;





