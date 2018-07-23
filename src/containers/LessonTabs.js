import React from 'react'
import LessonTabItem from '../components/LessonTabItem'


export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lesson: {title: ''},
            lessons: [],
            courseId: '',
            moduleId: ''
        };
    }


    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setLessonTitle(event) {
        this.setState({lesson: {title: event.target.value}})
    }

    render() {
        return(
            <div>
                <h3>Lesson Tabs</h3>

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>


            </div>
        )
    }
}