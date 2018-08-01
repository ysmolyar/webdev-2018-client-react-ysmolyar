import React from "react";
import ModuleListItem from "../components/ModuleListItem";
import ModuleServiceClient from "../services/ModuleServiceClient";
import CourseServiceClient from "../services/CourseServiceClient";
import {BrowserRouter as Router} from 'react-router-dom'

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            course: {title: ''},
            module: {title: 'New Module' },
            modules: []
        };
        this.moduleServiceClient = ModuleServiceClient.instance;
        this.courseServiceClient = CourseServiceClient.instance;

    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        console.log("GOT COURSEID FROM PROPS: " + this.props.courseId);
        this.findCourseById(this.props.courseId);
        this.findAllModulesForGivenCourse(this.props.courseId);

    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findCourseById(newProps.courseId);
        this.findAllModulesForGivenCourse(newProps.courseId);
    }


    findCourseById = (courseId) => {
        this.courseServiceClient.findCourseById(courseId)
            .then((course) => this.setCourse(course));
    };

    findAllModulesForGivenCourse = (courseId) => {
        this.moduleServiceClient
            .findAllModulesForGivenCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    };

    titleChanged = (event) => {
        this.setState({module: {title: event.target.value}});
    };

    setCourseId = (courseId) => {
        this.setState({courseId: courseId});
    };

    setCourse = (course) => {
        this.setState({course: course});
    };

    setModules = (modules) => {
        this.setState({modules: modules})
    };

    renderListOfModules = () => {
        let modules = null;

        if (this.state) {
            console.log("STATE COURSEID: " + this.state.courseId);
            this.moduleServiceClient
                .findAllModulesForGivenCourse(this.props.courseId)
                .then((modules) => {this.setState({modules: modules})});
            modules = this.state.modules.map((module) =>
                    <ModuleListItem courseId={this.state.courseId}
                                module={module}
                                key={module.id}
                                delete={this.deleteModule}/>
                )}
            return modules;
        };


    createModule = () => {

        const mtModule = {title: "New Module"};

        if (this.state.module.title === '') {

            this.moduleServiceClient.createModule(this.state.courseId, mtModule)
                .then(() => this.findAllModulesForGivenCourse(this.state.courseId))
                .then(modules => this.setState({modules: modules}));
        }
        else {

            var thisModule = {title: this.state.title, course: this.state.course};
            this.state.modules.push(thisModule);

            this.moduleServiceClient.createModule(this.state.courseId, this.state.module)
                .then(() => {this.findAllModulesForGivenCourse(this.state.courseId); })
                .then(modules => this.setState({modules: modules}));
        }
    };


    deleteModule = (moduleId) => {

        let popupResponse = window.confirm("Are you sure you want to delete this module?");

        if (popupResponse === true) {
            this.moduleServiceClient.deleteModule(moduleId)
                .then(() => alert("Successfully deleted module with id: " + moduleId))
                .catch((error) => {
                    console.log("error deleting module!");
                })
                .then(() => { this.findAllModulesForGivenCourse(this.state.courseId); })
        }
    };


    render() {
        return (
            <Router>
                <div>
                    <input onChange={this.titleChanged}
                           value={this.state.module.title}
                           placeholder="Add Module Title Here"
                           className="form-control"/>
                    <button onClick={this.createModule} className="btn btn-primary btn-block">
                        <i className="fa fa-plus"></i>
                    </button>
                    <br/>
                    <ul className="list-group">
                        {this.renderListOfModules()}
                    </ul>
                </div>
            </Router>
        );
    }
}
