import React from 'react'

export const ListWidget = ({widget, updateWidget, preview}) => {
    let listItems;
    let listType;
    let name;

    return (
        <div>

            <h3 hidden={preview}>List Widget: {widget.name}</h3>

            <div hidden={preview}>

                <label htmlFor="listType">List Type</label>

                <select ref={node => listType = node}
                        className="form-control"
                        id="listType"
                        value={widget.listType}
                        onChange={() => {
                            widget.listType = listType.value;
                            updateWidget(widget);}}>
                    <option value="Unordered">Unordered (Bulleted)</option>
                    <option value="Ordered">Ordered (Numbered)</option>
                </select>

                <label htmlFor="list-text">List Contents</label>

                <textarea ref={node => listItems = node}
                          className="form-control"
                          placeholder="Please enter one list item per line"
                          value={widget.listItems}
                          id="list-text"
                          onChange={() => {
                              widget.listItems = listItems.value;
                              updateWidget(widget)}}>
                </textarea>

                <label htmlFor="list-name">Widget Name</label>

                <input ref={node => name = node}
                       className="form-control"
                       placeholder="Widget Name"
                       value={widget.name}
                       id="list-name"
                       onChange={() => {
                           widget.name = name.value;
                           updateWidget(widget)}}/>

                <h4>Preview</h4>

            </div>

            {widget.listType === "Ordered" && widget.listItems !== '' &&
            <ol>{widget.listItems
                .split('\n')
                .map((item, index) => (<li key={index}>{item}</li>))}
            </ol>}

            {widget.listType === "Unordered" && widget.listItems !== '' &&
            <ul>{widget.listItems
                    .split('\n')
                    .map((item, index) => (<li key={index}>{item}</li>))}
            </ul>}

        </div>
    )}