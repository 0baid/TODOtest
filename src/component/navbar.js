import React, { Component } from 'react';

class navbar extends Component {
    
    render() { 
        return ( 
            <div className="ml-2">
                <input placeholder="Enter Task" className="form" id="input" />
                <span style={{ fontSize:'15px'}} className="badge badge-primary m-2">Total Tasks:</span>
                <span style={{ fontSize:'15px'}} className={this.badgecolor()}>{this.props.count} </span>
                <button className="btn btn-primary btn-sm" onClick={()=>this.props.addtask(document.getElementById("input").value)} >ADD</button>
            </div>
         );
    }

    badgecolor() {
        let bdgcolor = "badge m-2 badge-";
        bdgcolor += (this.props.count) === 0 ? "warning" : "primary";
        return bdgcolor;
    }
}
 
export default navbar;