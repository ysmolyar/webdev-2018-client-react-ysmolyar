import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


class CourseListHeader extends React.Component {
    render() {
        return (
            <div className="header sticky container-fluid">
                <div className="row courseManagerHeaderSettingsBtn">
                    <div className="col col-sm-auto">
                        <i className="fa fa-2x fa-bars" id="courseManagerHeaderSettingsIcon"></i>
                        <h4 className="courseManagerTitle">Course Manager</h4>
                    </div>
                    <div className="col col-sm-5">
                        <input className="form-control addCourseFld" placeholder="New Course Title"/>
                    </div>
                    <div className="col col-sm-auto">
                    <span className="fa-stack newCourseBtn">
                        <i className="fa fa-2x fa-circle fa-stack-2x icon-a"></i>
                        <i className="fa fa-2x fa-plus-circle fa-stack-2x icon-b"></i>
                    </span>
                    </div>
                </div>
            </div>

        )
    }
}
export default CourseListHeader