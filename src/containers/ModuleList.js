import React from "react";
import ModuleListItem from "../components/ModuleListItem";
import ModuleServiceClient from "../services/ModuleServiceClient";

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            course: {title: ''},
            module: {title: 'New Module' },
            moduleIdToDelete: '',
            modules: []
        };
        this.moduleServiceClient = ModuleServiceClient.instance;
        this.setCourse = this.setCourse.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);

        this.setModuleToDelete = this.setModuleToDelete.bind(this);
        this.setModules = this.setModules.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.createModule = this.createModule.bind(this);
        this.renderListOfModules = this.renderListOfModules.bind(this);
        this.findAllModulesForGivenCourse = this.findAllModulesForGivenCourse.bind(this);
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        console.log("MODULELIST GOT COURSEID FROM PROPS DURING MOUNT: " + this.props.courseId);
        this.findAllModulesForGivenCourse(this.props.courseId);
    }


    setModuleToDelete(moduleId) {
        this.setState({moduleIdToDelete: moduleId});
    };


    findAllModulesForGivenCourse(courseId) {
        this.moduleServiceClient
            .findAllModulesForGivenCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    };

    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    };

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    };

    setCourse(course) {
        this.setState({course: course});
    };

    setModules(modules) {
        this.setState({modules: modules})
    };

    renderListOfModules() {
        let modules = '';
         modules = this.state.modules.map((module) => {
            return <ModuleListItem courseId={this.state.courseId}
                                   module={module}
                                   key={module.id}
                                   delete={this.setModuleToDelete}/>
    });
            return modules;
        };


    createModule() {

        const mtModule = {title: "New Module"};

        if (this.state.module.title === '') {

            this.moduleServiceClient.createModule(this.props.courseId, mtModule)
                .then(() => {this.findAllModulesForGivenCourse(this.props.courseId);});
        }
        else {

            this.moduleServiceClient.createModule(this.props.courseId, this.state.module)
                .then(() => {this.findAllModulesForGivenCourse(this.props.courseId); });
        }
    };


    deleteModule(moduleId) {

        let popupResponse = window.confirm("Are you sure you want to delete this module?");

        if (popupResponse === true) {
            this.moduleServiceClient.deleteModule(moduleId)
                .then(() => alert("Successfully deleted module with id: " + moduleId))
                .catch((error) => {
                    console.log("error deleting module!");
                })
                .then(() => {this.findAllModulesForGivenCourse(this.props.courseId);})
        }
    };


    render() {
        return (
                <div>
                    <input onChange={this.titleChanged}
                           placeholder="Add Module Title Here"
                           className="form-control"/>
                    <button className="btn btn-primary btn-block"
                            onClick={this.createModule}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <br/>
                    <ul className="list-group">
                        {this.renderListOfModules()}
                    </ul>
                </div>
        );
    }
}
