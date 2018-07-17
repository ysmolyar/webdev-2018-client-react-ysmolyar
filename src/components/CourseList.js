formChanged = (event) => {
    console.log(event.target.value);
    this.setState({newCourse: {
        title: event.target.value
        }})
};

createCourse = () => {
    this.courseService.createCourse(this.state.newCourse)
        .then((course) => console.log(course))
};