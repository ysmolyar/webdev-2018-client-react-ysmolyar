import React from "react";
import CourseCard from '../components/CourseCard';
import CourseList from "../containers/CourseList";
import CourseListHeader from "../containers/CourseListHeader"
import CourseManagerHeader from "../containers/CourseManagerHeader";


class CourseManager extends React.Component {


    render() {
        return (
            <div>
            <div>
                <div>
                    <CourseManagerHeader/>
                </div>
                <div>
                    <CourseListHeader/>
                </div>
            </div>
                <div>
                    <CourseList/>
                </div>
            </div>
        )
    }
}

export default CourseManager;