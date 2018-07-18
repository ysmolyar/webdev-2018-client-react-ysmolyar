import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import LessonTabs from './components/LessonTabs'
import TopicPills from './components/TopicPills'
import CourseList from './components/CourseList'
import CourseManager from './components/CourseManager'
import ModuleList from './components/ModuleList'
import CourseCard from './components/CourseCard'
import ModuleListItem from './components/ModuleListItem'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'



class BeigeBoardRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/"></Link>
                    <Route exact={true} path='/'/>
                    <Route path='/'
                           component={CourseManager}/>
                </div>
            </Router>
        )

    }
}





ReactDOM.render(
    <BeigeBoardRouter/>,
    document.getElementById('root')
);
