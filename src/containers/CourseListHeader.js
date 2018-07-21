import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


class CourseListHeader extends React.Component {
    render() {
        return (
            <div className="courseListHeader container-fluid">
                <table className="table">
                    <tbody>
                    <tr id="courseListHeaderHeadings">
                        <th>Title</th>
                        <th>Owned By</th>
                        <th>Last modified</th>
                        <th>&nbsp;</th>
                    </tr>
                    </tbody>
                </table>
            </div>


        )
    }
}

export default CourseListHeader