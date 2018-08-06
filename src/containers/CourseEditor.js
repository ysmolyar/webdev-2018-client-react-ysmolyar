import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import ModuleList from './ModuleList';
import CourseServiceClient from '../services/CourseServiceClient';
import ModuleEditor from './ModuleEditor';
import {Link, Route} from 'react-router-dom';

import '../styles.css';
import LessonEditor from "./LessonEditor";
import WidgetListContainer from "./WidgetListContainer";

export default class CourseEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            course: {},
            courseId: ''
        };
        this.courseServiceClient = CourseServiceClient.instance;

    }


    componentDidMount() {

        this.courseServiceClient.findCourseById(this.props.match.params.courseId)
            .then(course => this.setState({course: course}))
                .then(() => this.setState({courseId: this.props.match.params.courseId}));

    }



    render() {
        return (
            <div className="courseEditor">
                <div className="row">
                <div className="col-4">
                    <div className="container-fluid">
                        <span>
                            <Link to={`/courses`}>
                            <i className="fa fa-chevron-left"></i>
                        </Link>
                        </span>
                        <h3>Editing: {this.state.course.title}</h3>
                        <br/>
                        <h3>Modules</h3>
                        <ModuleList courseId={this.props.match.params.courseId}/>
                    </div>
                </div>
                <div className="col-8">
                    <div className="container-fluid">
                        <Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}/>
                        <br/>
                        <Route path='/course/:courseId/module/:moduleId/lesson/'
                               component={WidgetListContainer}/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
