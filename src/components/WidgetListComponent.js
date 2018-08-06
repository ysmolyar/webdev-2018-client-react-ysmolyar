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
                <div className="pull-right">
                    <ToggleButton onToggle={this.props.togglePreview}
                                  value={this.props.preview}/>
                </div>
                <h5 className="pull-right">Preview</h5>
                <button onClick={() => this.props.saveWidgets(this.props.lessonId)}
                        className="btn btn-success float-right">Save</button>
                <h3>Widget List ({this.props.widgets.length})</h3>
                <ul className="list-group">
                    <button
                        onClick={() => {this.props.createWidget()}}
                        className="btn btn-primary"
                        hidden={this.props.preview}>Add Widget</button>
                    {this.props.widgets.sort((a,b) => a.ordering - b.ordering).map((widget, index)=>{
                            widget.ordering = index;
                            let widgetType;
                            return(
                                <li className="list-group-item"
                                    key={index}>
                                    <div hidden={this.props.preview}>
                                        <button className="pull-right btn btn-danger"
                                                onClick={() => this.props.deleteWidget(widget.id)}>
                                            <i className="fa fa-times"></i>
                                        </button>
                                        <select id="widget-dropdown"
                                                value={widget.type}
                                                ref={node => widgetType = node}
                                                onChange={()=>{
                                                    widget.type = widgetType.value;
                                                    this.props.updateWidget(widget);}}
                                                className="float-right form-control">
                                            <option value="HEADING">Heading Widget</option>
                                            <option value="PARAGRAPH">Paragraph Widget</option>
                                            <option value="LIST">List Widget</option>
                                            <option value="IMAGE">Image Widget</option>
                                            <option value="LINK">Link Widget</option>
                                        </select>
                                        <button onClick={() => this.props.moveDown(widget)}
                                                hidden={widget.ordering === this.props.widgets.length - 1}
                                                className="float-right btn btn-warning">
                                            <i className="fa fa-arrow-down"></i>
                                        </button>
                                        <button onClick={() => this.props.moveUp(widget)}
                                                hidden={widget.ordering === 0}
                                                className="float-right btn btn-warning">
                                            <i className="fa fa-arrow-up"></i>
                                        </button>
                                    </div>
                                    <div>
                                        {widget.type === 'LIST' && <ListWidget widget={widget}
                                                                               updateWidget={this.props.updateWidget}
                                                                               preview={this.props.preview}/>}
                                        {widget.type === 'HEADING' && <HeadingWidget widget={widget}
                                                                                     preview={this.props.preview}
                                                                                     updateWidget={this.props.updateWidget}/>}
                                        {widget.type === 'PARAGRAPH' && <ParagraphWidget widget={widget}
                                                                                         preview={this.props.preview}
                                                                                         updateWidget={this.props.updateWidget}/>}
                                        {widget.type === 'IMAGE' && <ImageWidget widget={widget}
                                                                                 preview={this.props.preview}
                                                                                 updateWidget={this.props.updateWidget} />}
                                        {widget.type === 'LINK' && <LinkWidget widget={widget}
                                                                               preview={this.props.preview}
                                                                               updateWidget={this.props.updateWidget} />}
                                    </div>
                                </li>)
                        })}
                </ul>
            </div>
        )
    }
}
