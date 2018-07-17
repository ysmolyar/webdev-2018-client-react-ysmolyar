formChanged = (event) => {
    console.log(event.target.value);
    this.setState({newCourse: {
        title: event.target.value
        }})
};

createCourse = () => {
    this.courseService.createCourse(this.state.newCourse)
        .then((course) => this.courseService.findAllCourses())
        .then(courses => {this.setState({courses: courses})})
};

