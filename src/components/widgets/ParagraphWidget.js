import React from 'react'

export const ParagraphWidget = ({widget, updateWidget, preview}) => {
    let text;
    let name;

    return (
        <div>

            <h3 hidden={preview}>Paragraph Widget: {widget.name}</h3>

            <div hidden={preview}>

                <label htmlFor="p-text">Paragraph Text</label>

                <textarea
                    ref={node => text = node}
                    className="form-control"
                    id="p-text"
                    placeholder="Paragraph text..."
                    value={widget.text}
                    onChange={() => {
                        widget.text = text.value;
                        updateWidget(widget);}}>
                </textarea>


                <label htmlFor="paragraph-name">Widget Name</label>

                <input ref={node => name = node}
                       placeholder="Widget Name"
                       value={widget.name}
                       className="form-control"
                       id="paragraph-name"
                       onChange={() => {
                           widget.name = name.value;
                           updateWidget(widget)}}/>

                <h4>Preview</h4>
            </div>

            <p>{widget.text}</p>
        </div>
    )}