import React from "react";
import CourseCard from '../components/CourseCard';
import CourseList from "../containers/CourseList";
import CourseManagerHeader from "../containers/CourseManagerHeader";


class CourseManager extends React.Component {


    render() {
        return (
            <div>
                <CourseManagerHeader/>
                <div>

                    <CourseList/>
                </div>
            </div>
        )
    }
}

export default CourseManager;