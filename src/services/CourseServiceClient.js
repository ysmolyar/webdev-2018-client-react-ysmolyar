//createCourse​,
//​deleteCourse​, ​
// findAllCourses​.
//
// The service should send and retrieve all data from the server at a Web service endpoint mapped to ​/api/course

function deleteCourse(courseId) {
    return fetch(this.COURSE_API_URL) + '/' + courseId, {
        method: 'delete'
    }
        .then(function(response) {
            return response;
        })};