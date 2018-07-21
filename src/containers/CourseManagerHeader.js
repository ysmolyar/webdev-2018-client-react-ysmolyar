import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';



class CourseManagerHeader extends React.Component {
    render() {
        return (
            <div className="navbar container-fluid">
                <div className="row courseManagerHeaderSettingsBtn">
                    <span className="col col-sm-3" id="courseManagerHeaderSettingsSpan">
                        <i className="fa fa-2x fa-bars" id="courseManagerHeaderSettingsIcon"></i>
                        <h4 className="courseManagerTitle">Course Manager</h4>
                    </span>
                    <span className="col col-sm-8 float-left addCourseFldAndBtn">
                        <input className="form-control addCourseFld" placeholder="New Course Title"/>
                        <span className="fa-stack newCourseBtn">
                        <i className="fa fa-2x fa-circle fa-stack-2x icon-a"></i>
                        <i className="fa fa-2x fa-plus-circle fa-stack-2x icon-b"></i>
                    </span>
                        </span>
                </div>
            </div>

        )
    }
}
export default CourseManagerHeader