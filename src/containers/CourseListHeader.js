import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


class CourseListHeader extends React.Component {
    render() {
        return (
            <div className="courseListHeader container-fluid">
                <div className="row courseListHeaderHeadings">
                    <div className="col-sm-3"><b>Title</b></div>
                    <div className="col-sm-5"><b>Owned By</b></div>
                    <div className="col-sm-1"><b>Last Modified</b></div>
                </div>
            </div>


        )
    }
}

export default CourseListHeader