import React from 'react';
import {Link} from 'react-router-dom';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/CourseRow.css';

class CourseRow extends React.Component {

    static getCurrentTime(dateTime) {
        return new Date(dateTime).toISOString().slice(0, 19).replace('T', ' ');
    }


    render() {
        return (
            <tr className="row list-group-item">

                <td className="col-sm-2 courseLink">
                <Link to={`/course/${this.props.course.id}/module/lesson`}>
                    <span><i className="fa fa-bars blue-bars"></i>
                    {this.props.course.title}
                    </span>
                </Link>
                </td>

                <td className="courseAuthor">
                <b> me </b>
                </td>

                <td className="modifiedTime">
                    {CourseRow.getCurrentTime(this.props.course.modified)}
                </td>

                <td className="deleteBtn">
                    <i className="fa fa-trash pull-right" onClick={() => {
                        this.props.delete(this.props.course.id)}}></i>
                </td>

            </tr>
        )
    }
}

export default CourseRow;