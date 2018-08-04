import React from 'react'
import LessonTabs from './LessonTabs'

export default class ModuleEditor
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {moduleId: '', courseId: ''};
        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectModule.bind(this);
    }

    componentDidMount() {
        this.selectModule(this.props.match.params.moduleId);
        this.selectCourse(this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.selectModule(newProps.moduleId);
        this.selectCourse(newProps.courseId);
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    render() {
        return(
            <div>
                <LessonTabs moduleId={this.props.match.params.moduleId}
                            courseId={this.props.match.params.courseId}/>
            </div>
        );
    }
}