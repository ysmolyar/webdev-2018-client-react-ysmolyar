import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import ModuleList from './ModuleList';
import CourseServiceClient from '../services/CourseServiceClient';
import ModuleEditor from './ModuleEditor';
import {Link} from 'react-router-dom';
import '../styles.css';


export default class CourseEditor extends Component {

    constructor(props) {
        super(props);
        this.courseServiceClient = CourseServiceClient.instance;
        this.state = {courseTitle: '', courseId: ''};
        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectModule.bind(this);
        this.findCourseById = this.findCourseById.bind(this);
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        this.selectModule(this.props.match.params.moduleId);
        this.findCourseById(this.props.match.params.courseId);

    }

    findCourseById(courseId) {
        this.courseServiceClient
            .findCourseById(courseId)
            .then((response) => {
                console.log(response.title);
                this.setState({courseTitle: response.title});
            })
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }


    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <div className="container-fluid">
                        <span>
                            <Link to={`/courses`}>
                            <i className="fa fa-chevron-left"></i>
                        </Link>
                            <h1>{this.state.courseTitle}</h1>
                        </span>
                        <h3>Modules</h3>
                        <ModuleList courseId={this.state.courseId}/>
                    </div>
                </div>
                <div className="col-8">
                    <div className="container-fluid">
                        <ModuleEditor courseId={this.state.courseId} moduleId={this.state.moduleId}/>
                    </div>
                </div>
            </div>
        );
    }
}
