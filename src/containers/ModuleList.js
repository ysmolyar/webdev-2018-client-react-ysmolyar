import React, {Component} from "react";
import ModuleListItem from "../components/ModuleListItem";
import ModuleServiceClient from "../services/ModuleServiceClient";
import CourseServiceClient from "../services/CourseServiceClient";
export default class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.moduleServiceClient = ModuleServiceClient.instance;
        this.courseServiceClient = CourseServiceClient.instance;
        this.state = {
            courseId: '',
            course: {},
            module: {
                title: '',
                courseId: '',
                lessons: [{title: ''}], },
            moduleId: '',
            modules: []
        };
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.selectModule = this.selectModule.bind(this);
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.findCourseById(this.props.courseId);

        //console.log("props id module list" + this.props.courseId);

    }

    findCourseById = (courseId) => {
        this.courseServiceClient.findCourseById(courseId)
            .then((course) => this.setState({course: course}));
    };

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.findAllModulesForGivenCourse(newProps.courseId);
    };

    selectModule = (moduleId) => {
        this.setState({moduleId: moduleId});
    };

    titleChanged = (event) => {
        this.setState({module: {title: event.target.value, courseId: this.state.module.courseId}});
    };


    findAllModulesForGivenCourse(courseId) {
        this.moduleServiceClient
            .findAllModulesForGivenCourse(courseId)
            .then((modules) => {this.setState({modules: modules})});
    }

    setCourseId = (courseId) => {
        this.setState({courseId: courseId});
    }


    /*
        createModule = (module) => {
            module.courseId = this.props.courseId;
            this.state.course.modules.push(module);
            this.moduleServiceClient.createModule(module.courseId, module);
            this.courseServiceClient.updateCourse(module.courseId, this.state.course);
        };

        */
    createModule() {


        this.findCourseById(this.state.courseId);
        const mtModule = {title: "New Module"};

        if (this.state.module.title === '' || this.state.module === undefined) {

            this.moduleServiceClient.createModule(this.state.courseId, mtModule)
                .then(() => this.findAllModulesForGivenCourse(this.state.courseId))
                .then(modules => this.setState({modules: modules}))
                .then(() => this.renderListOfModules);

        }
        else {

            this.moduleServiceClient.createModule(this.state.courseId, this.state.module)
                .then(() => {this.findAllModulesForGivenCourse(this.state.courseId); })
                .then(modules => this.setState({modules: modules}))
                .then(() => this.renderListOfModules);

        }
    }



    renderListOfModules = () => {
        console.log("MODULES FROM MODULE LIST:" + this.state.modules);
        let modules = null;

        if (this.state.modules) {

            this.moduleServiceClient.findAllModulesForGivenCourse(this.state.courseId)
                .then((modules) => this.setState({modules: modules}));
            modules = this.state.modules.map((module) => {
                return <ModuleListItem courseId={this.state.courseId}
                                       module={module}
                                       key={module.id}
                                       delete={this.deleteModule}/>
            });
        }

        return modules;

    };

    deleteModule(moduleId) {

        let popupResponse = window.confirm("Are you sure you want to delete this course?");

        if (popupResponse === true) {
            this.moduleServiceClient.deleteModule(moduleId)
                .then((res) => res.text())
                .then((text) => text.length ? JSON.parse(text) : {})
                .then(() => alert("Successfully deleted module with id: " + moduleId))
                .catch((error) => {
                    console.log("error deleting module");
                }).then(() => { this.findAllModulesForGivenCourse(this.state.courseId); })
        }
    }


    render() {
        return (
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
                    {this.renderListOfModules}
                </ul>

            </div>
        );
    }
}
