import React, {Component} from "react";


export default class WhiteBoardHeader extends Component {


    render() {
        return(
            <div className="row navbar courseManagerHeaderSettingsBtn">
                <span className="col col-sm-3" id="courseManagerHeaderSettingsSpan">
                <h4 className="courseManagerTitle">WhiteBoard</h4>
            </span>
            <span className="col col-sm-8 float-left addCourseFldAndBtn">
            <input className="form-control addCourseFld" placeholder="Search"
                         onChange={this.titleChanged}/>
            </span>
        </div>
        )
}
}