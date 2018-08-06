import React from 'react'
import LessonTabs from './LessonTabs'
import WidgetListContainer from "./WidgetListContainer";

export default class LessonEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {lessonId: ''};
        this.selectLesson = this.selectModule.bind(this);
    }

    componentDidMount() {
        this.selectLesson(this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.selectLesson(newProps.match.params.lessonId);
    }

    selectLesson(lessonId) {
        this.setState({lessonId: lessonId});
    }

    render() {
        return(
            <div>
                <WidgetListContainer lessonId={this.state.lesson.id}/>
            </div>
        );
    }
}