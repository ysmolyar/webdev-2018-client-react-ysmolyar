import {connect} from 'react-redux';
import WidgetListItem from '../components/WidgetListComponent';

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    preview: state.preview});

const LESSON_API_URL = 'http://localhost:8080/api/lesson';
const WIDGET_API_URL = 'http://localhost:8080/api/widget';


const dispatcherToPropertyMapper = dispatch => ({

    findWidgetsByLesson: lessonId =>
        fetch(LESSON_API_URL + '/' + lessonId + '/widget')
            .then(response => response.json())
            .then(widgets => dispatch({
                type: 'FIND_WIDGETS_BY_LESSON',
                widgets: widgets
            })),

        findAllWidgets: () =>
            fetch(WIDGET_API_URL)
                .then(response => response.json())
                .then(widgets => dispatch({
                    type: 'FIND_ALL_WIDGETS',
                    widgets: widgets
                })),

        findWidgetById: widgetId =>
            fetch(WIDGET_API_URL + '/' + widgetId)
                .then(response => response.json())
                .then(widget => dispatch({
                    type: 'FIND_WIDGET_BY_ID',
                    widget: widget
                })),

        createWidget: (lessonId, widget) => dispatch({
            type: 'CREATE_WIDGET',
            lessonId: lessonId,
            widget: widget
        }),

        updateWidget: widget => dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),

        deleteWidget: widgetId => dispatch({
            type: 'DELETE_WIDGET',
            widgetId: widgetId
        }),

        saveWidgets: lessonId => dispatch({
            type: 'SAVE_WIDGETS',
            lessonId: lessonId
        }),

        togglePreview: () => dispatch({
            type: 'PREVIEW'
        }),

        moveUp: widget => dispatch({
            type: 'MOVE_UP',
            widget: widget
        }),

        moveDown: widget => dispatch({
            type: 'MOVE_DOWN',
            widget: widget
        })
    });

const WidgetListContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListItem);

export default WidgetListContainer