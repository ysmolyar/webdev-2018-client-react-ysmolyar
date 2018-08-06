import React from 'react';

export const ImageWidget = ({widget, updateWidget, preview}) => {

    let name;
    let src;

    return(
        <div>
            <h3 hidden={preview}>Image Widget</h3>

            <h4>{widget.name}</h4>

            <div hidden={preview}>

                <label htmlFor="image-url">Image URL</label>

                <input ref={node => src = node}
                       className="form-control"
                       placeholder="Image URL"
                       id="image-url"
                       value={widget.src}
                       onChange={() =>{
                           widget.src = src.value;
                           updateWidget(widget)}}></input>

                <label htmlFor="image-name">Widget Name</label>

                <input onChange={() => {
                    widget.name = name.value;
                    updateWidget(widget)}}
                       ref={node => name = node}
                       className="form-control"
                       placeholder="Widget name"
                       value={widget.name}
                       id="image-name"/>

                <h4>Preview</h4>

            </div>

            <img className="img-fluid"
                 src={widget.src}/>

        </div>
    )}