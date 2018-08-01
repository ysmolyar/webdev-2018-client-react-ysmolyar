import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react'
import CourseCard from '../components/CourseCard'
import CourseEditor from './CourseEditor';
import CourseList from "./CourseList";



export default class CourseManager extends Component {
    constructor(props) {
        super(props);
        // this.courseService = CourseService.instance;
        this.state = {
            course: {title: '',
                     courseId: ''},
            courses: []
        };

    }

    render() {
        return (
            <CourseList select={this.props.courseId}/>
        )
    }
}
