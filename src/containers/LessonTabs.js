import React from 'react'
import LessonTabItem from '../components/LessonTabItem'
import LessonServiceClient from "../services/LessonServiceClient";


export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lesson: {title: ''},
            lessonIdToDelete: '',
            lessons: []
        };

        this.lessonServiceClient = LessonServiceClient.instance;
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.setLessons = this.setLessons.bind(this);
        this.setLessonToDelete = this.setLessonToDelete.bind(this);
        this.renderLessonTabs = this.renderLessonTabs.bind(this);
        this.findAllLessonsForGivenModule = this.findAllLessonsForGivenModule.bind(this);
    }


    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.findAllLessonsForGivenModule();
    }

    componentWillReceiveProps(newProps){
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForGivenModule(newProps.courseId, newProps.moduleId);
    }


    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    setLessonTitle(event) {
        this.setState({lesson: {title: event.target.value}})
    }

    setLessonToDelete(lessonId) {
        this.setState({lessonIdToDelete: lessonId})
    }

    titleChanged(event) {
        this.setState({newLesson: {title: event.target.value}});
    }

    findAllLessonsForGivenModule() {
        this.lessonServiceClient
            .findAllLessonsForGivenModule(this.props.courseId, this.props.moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    }

    createLesson() {

        const mtLesson = {title: "New Lesson"};

        if (this.state.lesson.title === '') {

            this.lessonServiceClient.createLesson(this.props.courseId,
                                                  this.props.moduleId,
                                                    mtLesson)
                .then(() => {this.findAllLessonsForGivenModule(this.props.courseId, this.props.moduleId); });
        }
        else {
            this.lessonServiceClient.createLesson(this.props.courseId,
                                                  this.props.moduleId,
                                                  this.state.lesson)
                .then(() => {this.findAllLessonsForGivenModule(this.props.courseId, this.props.moduleId); });
        }
    }

    deleteLesson(lessonId) {

        let popupResponse = window.confirm("Are you sure you want to delete this lesson?");

        if (popupResponse === true) {
            this.lessonServiceClient.deleteLesson(lessonId)
                .then(() => alert("Successfully deleted lesson with id: " + lessonId))
                .catch((error) => {
                    console.log("error deleting lesson!");
                })
                .then(() => {this.findAllLessonsForGivenModule(this.props.courseId, this.props.moduleId); })
        }
    };

    renderLessonTabs() {
        let lessons = this.state.lessons.map((lesson) => {
            return <LessonTabItem lesson={lesson}
                              key={lesson.id}
                              delete={this.setLessonToDelete}
                              courseId={this.props.courseId}
                              moduleId={this.props.moduleId}/>;
        });

        return lessons;
    }


    render() {
        return(
            <div>
                <h3>Lesson Tabs</h3>

                <ul className="nav nav-tabs">
                    {this.renderLessonTabs()}
                </ul>

            </div>
        )
    }
}