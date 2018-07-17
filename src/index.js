import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import LessonTabs from './components/LessonTabs'
import TopicPills from './components/TopicPills'
import CourseList from './components/CourseList'
import ModuleList from './components/ModuleList'
import ModuleListItem from './components/ModuleListItem'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'



class BeigeBoard extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>BeigeBoard</h1>
                    <Link to="/components/CourseList">Course List</Link>
                    <Route path='/course-list'
                           component={CourseList}/>
                </div>
            </Router>
            /*
        <div class="container-fluid">
            <h1>Whiteboard</h1>

            <TopicPills/>
            <LessonTabs/>
            <ModuleList/>
            <div class="card-deck">
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
            </div>
        </div>
        */
        )
    }
}



ReactDOM.render(
    <BeigeBoard/>,
    document.getElementById('root')
);
