let _singleton = Symbol();

//SHOULD REFLECT MOST UP TO DATE API ENDPOINT
const MODULE_API_URL = "http://localhost:8080/api/course/{this.state.courseId}/module";

const COURSE_API_URL = "http://localhost:8080/api/course";

const MODULE_CID_API_URL = 'http://localhost:8080/api/course/CID/module'

let _singleton = Symbol();

export default class ModuleServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken) {
            throw new Error('Cannot instantiate directly!');
        }
    }

    static get instance() {
        if (!this[_singleton]) {
            this[_singleton] = new ModuleServiceClient(_singleton);
        }
        return this[_singleton];
    }

    deleteModule(moduleId) {
        return fetch(MODULE_API_URL + '/' + moduleId, {
            method: 'DELETE'
        })
            .then(function(response){
                return response;
            });
    };


    render() {
        return(
            <div className="row">
                <div className="col-4">
                    <div className="container-fluid">
            <span>
              <Link to={`/courses`}>
                <i className="fa fa-chevron-left"></i>
              </Link>
              <h1>
                {this.state.courseTitle}
              </h1>
            </span>
                        <h3>Modules</h3>
                        <ModuleList courseId={this.state.courseId}/>
                    </div>
                </div>
                <div className="col-8">
                    <div className="container-fluid">
                        <ModuleEditor courseId={this.state.courseId} moduleId={this.state.moduleId}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default ModuleServiceClient;
