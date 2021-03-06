//createCourse​,
//​deleteCourse​, ​
// findAllCourses​.
//
// The service should send and retrieve all data from the server at a Web service endpoint mapped to ​/api/course

let _singleton = Symbol();


//SHOULD REFLECT MOST UP TO DATE API ENDPOINT
// https://beastmode-webdev-ysmolyar.herokuapp.com/api/course
const COURSE_API_URL = "https://beastmode-webdev-ysmolyar.herokuapp.com/api/course";

class CourseServiceClient {


    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new CourseServiceClient(_singleton);
        return this[_singleton]
    }

    findAllCourses() {
        return fetch(COURSE_API_URL)
            .then(function(response){
                return response.json();
            });
    }


    findCourseById(courseId) {
        return fetch(COURSE_API_URL + '/' + courseId)
            .then(function(response){
                return response.json();
            });
    }


    updateCourse(courseId, course) {
        return fetch(COURSE_API_URL + '/' + courseId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        });
    }

    deleteCourse(courseId) {
        return fetch(COURSE_API_URL + '/' + courseId, {
            method: 'DELETE'
        })
            .then(function(response){
                return response;
            });
    };

    createCourse(course) {
        return fetch(COURSE_API_URL, {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })
    }
}
export default CourseServiceClient;