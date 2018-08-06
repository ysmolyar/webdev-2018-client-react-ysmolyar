import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './styles.css'
import WhiteBoard from "./containers/WhiteBoard";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import WidgetReducer from './reducers/WidgetReducer'

let store = createStore(WidgetReducer)


class App extends React.Component {
    render() {
        return(
            <Provider store = {store}>
                <WhiteBoard/>
            </Provider>
        )
    }
}

ReactDOM.render(
        <App/>,
    document.getElementById('root')
);
