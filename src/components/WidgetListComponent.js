import React from 'react';
import ToggleButton from 'react-toggle-button'
import {HeadingWidget} from './widgets/HeadingWidget';
import {ImageWidget} from './widgets/ImageWidget';
import {LinkWidget} from './widgets/LinkWidget';
import {ListWidget} from './widgets/ListWidget';
import {ParagraphWidget} from './widgets/ParagraphWidget';

export default class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props);
        let newWidgetType;
    }

    componentWillReceiveProps(newProps) {
        if (this.props.lessonId !== newProps.lessonId) {
            this.props.findWidgetsByLesson(newProps.lessonId);
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.saveWidgets(this.props.lessonId)}
                        className="btn btn-success float-right">Save</button>
                <div className="pull-right">
                    <div>
                        <h6 className="pull-right">Preview</h6>
                    </div>
                    <ToggleButton onToggle={this.props.togglePreview}
                                  value={this.props.preview}/>
                </div>
                <h3>Widget List ({this.props.widgets.length})</h3>
                <ul className="list-group">
                    <button
                        onClick={() => {this.props.createWidget()}}
                        className="btn btn-primary"
                        hidden={this.props.preview}>Add Widget</button>
                    {this.props.widgets.map((widget)=>{
                        let newWidgetType;
                        return(
                            <li className="list-group-item">
                                <div hidden={this.props.preview}>
                                    <button className="pull-right btn btn-danger"
                                            onClick={() => this.props.deleteWidget(widget.id)}>
                                        <i className="fa fa-times"></i>
                                    </button>
                                    <select id="widget-dropdown"
                                            value={widget.type}
                                            ref={node => newWidgetType = node}
                                            onChange={()=>{
                                                widget.type = newWidgetType.value;
                                                this.props.updateWidget(widget);}}
                                            className="form-control float-right ">
                                        <option value="Heading">Heading</option>
                                        <option value="Paragraph">Paragraph</option>
                                        <option value="Image">Image</option>
                                        <option value="Link">Link</option>
                                        <option value="List">List</option>
                                    </select>
                                </div>
                                <div>
                                    {widget.type === 'Heading' && <HeadingWidget widget={widget}
                                                                                 preview={this.props.preview}
                                                                                 updateWidget={this.props.updateWidget}/>}
                                    {widget.type === 'Paragraph' && <ParagraphWidget widget={widget}
                                                                                     preview={this.props.preview}
                                                                                     updateWidget={this.props.updateWidget}/>}
                                    {widget.type === 'Image' && <ImageWidget widget={widget}
                                                                             preview={this.props.preview}
                                                                             updateWidget={this.props.updateWidget} />}
                                    {widget.type === 'List' && <ListWidget widget={widget}
                                                                           updateWidget={this.props.updateWidget}
                                                                           preview={this.props.preview}/>}
                                    {widget.type === 'Link' && <LinkWidget widget={widget}
                                                                           preview={this.props.preview}
                                                                           updateWidget={this.props.updateWidget} />}
                                </div>
                            </li>)})}
                </ul>
            </div>
        )
    }
}
