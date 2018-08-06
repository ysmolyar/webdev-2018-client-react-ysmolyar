import React from 'react'

export const LinkWidget = ({widget, updateWidget, preview}) => {
    let text;
    let href;
    let name;

    return(
        <div>
            <h3 hidden={preview}>Link Widget: {widget.name}</h3>

            <div hidden={preview}>

                <label htmlFor="link-href">Link URL</label>

                <input ref={node => href = node}
                       className="form-control"
                       placeholder="Link URL"
                       id="link-href"
                       value={widget.href}
                       onChange={() =>{
                           widget.href = href.value;
                           updateWidget(widget)}}></input>

                <label htmlFor="link-text">Link Text</label>

                <input ref={node => text = node}
                       className="form-control"
                       placeholder="Link Text"
                       value={widget.text}
                       id="link-text"
                       onChange={() => {
                           widget.text = text.value;
                           updateWidget(widget)}}/>

                <label htmlFor="link-name">Widget Name</label>

                <input ref={node => name = node}
                       className="form-control"
                       placeholder="Widget Name"
                       value={widget.name}
                       id="link-name"
                       onChange={() => {
                           widget.name = name.value;
                           updateWidget(widget)}}/>


                <h4>Preview</h4>

            </div>

            <a href={widget.href}>
                {widget.text}
            </a>

        </div>
    )}