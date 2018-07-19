import React from "react";
import CourseCard from './CourseCard';
import CourseList from "../containers/CourseList";


class CourseManager extends React.Component {


    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <div>

                <CourseList/>
                </div>
            </div>
        )
    }
}

export default CourseManager;