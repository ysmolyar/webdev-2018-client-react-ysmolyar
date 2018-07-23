import React from 'react';
import {Link} from 'react-router-dom';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/CourseRow.css';

class CourseRow extends React.Component {

    deleteCourse() {
        if (window.confirm("Are you sure you want to delete this course?")) {
            this.props.deleteCourse(this.props.course.id);
        }
        else {
            return;
        }
    }

    render() {
        return (
            <li className="row list-group-item">
                <span className="col-sm-2 courseRowTitle">
                <Link to={`/course/${this.props.course.id}/module/lesson`}>
                    <i className="fa fa-bars blue-bars"></i>
                    {this.props.course.title}
                </Link>
                    </span>
                <span className="col-sm-2 courseRowAuthor">
                <b> me </b>
                </span>
                <span className="col-sm-3 courseRowDate">
                    {this.props.course.modified.substr(0, this.props.course.modified.indexOf("T"))}
                </span>
                <span className="pull-right">
                    <i style={{'marginRight': '5px'}} className="fa fa-trash" onClick={() => {
                        this.props.delete(this.props.course.id)
                    }}></i>
          <i className="fa fa-pencil"></i>
        </span>
            </li>
        )
    }
}

export default CourseRow;