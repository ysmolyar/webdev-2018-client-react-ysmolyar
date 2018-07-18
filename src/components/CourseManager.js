import React from "react";
import CourseCard from './CourseCard';

class CourseManager extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <h1>Beigeboard</h1>
                <div class="card-deck">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        )
    }
}
export default CourseManager;