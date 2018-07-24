import React, {Component} from "react";
import ModuleListItem from "../components/ModuleListItem";
import ModuleServiceClient from "../services/ModuleServiceClient";

export default class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.moduleServiceClient = ModuleServiceClient.instance;

        this.state = {
            courseId: '',
            module: {title: ''},
            modules: []
        };
        this.createModule = this.createModule.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.setCourseId = this.setCourseId.bind(this);

    }

    setCourseId(courseId) { this.setState({courseId: courseId});}

    setModules(modules) { this.setState({modules: modules}); }

    componentDidMount() { this.setCourseId(this.props.courseId);}

    findAllModulesForGivenCourse(courseId) {
        this.moduleServiceClient
            .findAllModulesForGivenCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForGivenCourse(newProps.courseId)
    }

    createModule() {
        if (this.state.module.title === '' || this.state.module === undefined) {

            this.setState({courseId: this.state.module.courseId},  {module: {title: "New Module"}}, function () {
                return this.moduleServiceClient.createModule(this.state.module).then(this.findAllModules);
            });
        }
        else {
            this.moduleServiceClient.createModule(this.state.module).then(this.findAllModulesForGivenCourse(this.state.courseId));
        }
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }

    renderListOfModules() {
        var rows = this.state.modules.map((module) => {
            return <ModuleListItem courseId={this.state.courseId} module={module} key={module.id} delete={this.deleteModule}/>
        });
        return (
            rows
        )
    }

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
                {this.renderListOfModules()}
            </ul>
        </div>
    );
}
}
