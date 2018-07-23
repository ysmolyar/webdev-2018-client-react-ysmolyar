import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React, {Component} from "react";
import CourseServiceClient from '../services/CourseServiceClient'
import CourseRow from "../components/CourseRow";
import "../styles.css";
import "../styles/CourseList.css"
import WhiteboardHeader from "./WhiteboardHeader";

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
                <table className="table table-striped table-hover" >
                    <thead>
                    <tr className="row header">
                        <th className="col-sm-2"/>
                        <th className="title col-sm-4">Title</th>
                        <th className="ownedBy col-sm-2">Owned By</th>
                        <th className="lastModified col-sm-4">Last Modified</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody className="courseList list-group container-fluid">

                    {this.renderCourseRows()}
                    </tbody>
                </table>
                </div>
        )
    };
}


export default CourseList;





