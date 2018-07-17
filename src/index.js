import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import LessonTabs from './components/LessonTabs'
import TopicPills from './components/TopicPills'

class ModuleListItem extends React.Component {
    render() {
        return(
            <li className="list-group-item">
                {this.props.title}
                <span className="pull-right">
          <i style={{'margin-right': '5px'}} className="fa fa-trash"></i>
          <i className="fa fa-pencil"></i>
        </span>
            </li>
        )
    }
}

class ModuleList extends React.Component {
    render() {
        return (
            <div>
                <h1>Module List</h1>
                <ul className="list-group">
                    <ModuleListItem title="Module 1"/>
                    <ModuleListItem title="Module 2"/>
                    <ModuleListItem title="Module 3"/>
                    <ModuleListItem title="Module 4"/>
                </ul>
            </div>
        )
    }
}


class CourseCard extends React.Component {
    render() {
        return (

            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top" alt={"Card image"}
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Card text.</p>
                    <a href="#" className="btn btn-primary">More...</a>
                </div></div>

        )
    }
}

class BeigeBoard extends React.Component {
    render() {
        return (
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
        )
    }
}

ReactDOM.render(
    <BeigeBoard/>,
    document.getElementById('root')
);
