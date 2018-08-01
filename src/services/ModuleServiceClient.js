import React from 'react';

import {Link} from 'react-router-dom';
import ModuleList from "../containers/ModuleList";
import ModuleEditor from "../containers/ModuleEditor";


//SHOULD REFLECT MOST UP TO DATE API ENDPOINT
//https://beastmode-webdev-ysmolyar.herokuapp.com/api/course/{this.state.courseId}/module
const MODULE_API_URL = "http://localhost:8080/api/module";

//https://beastmode-webdev-ysmolyar.herokuapp.com/api/course/CID/module
const MODULE_CID_API_URL = 'http://localhost:8080/api/course/CID/module';

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

    findAllModules() {
        return fetch(MODULE_API_URL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function(response){
                return response.json();
            });
    };

    findAllModulesForGivenCourse(courseId) {
        return fetch(MODULE_CID_API_URL.replace('CID', courseId), {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
                return response.json();
            })

    }

    createModule(courseId, module) {
        return fetch(MODULE_CID_API_URL.replace('CID', courseId), {
            body: JSON.stringify(module),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        }).then(function (response)
        { return response.json(); })
    };


    deleteModule(moduleId) {
        return fetch(MODULE_API_URL + '/' + moduleId, {
            method: 'DELETE'
        })
            .then(function(response){
                return response;
            });
    };
}