import React, { Component } from 'react';

class task extends Component {
    render() { 
    
        
        return ( 
            <div className="ml-2">
                <span style={{ fontSize:'15px'}} className="badge m-2 badge-danger" > {this.props.task.name} </span>
                <span style={{ fontSize:'15px'}} className={this.badgecolor()} > {this.stateCount()} </span> 
                <button className="btn btn-sm" onClick={()=>this.props.increment(this.props.task)}>+</button>
                <button className="btn btn-sm" onClick={()=>this.props.decrement(this.props.task)}>-</button>
                <button className="btn btn-danger btn-sm" onClick={ () => this.props.onDelete(this.props.task.id)} >Delete</button>
            </div>
         );
    }

    

  
    
    
    
    
    badgecolor() {
        let bdgcolor = "badge m-2 badge-";
        bdgcolor += (this.props.task.count) === 0 ? "warning" : "primary";
        return bdgcolor;
    }

    stateCount()
    {
        return this.props.task.count === 0 ? 'zero' : this.props.task.count;
        
    }

}
 
export default task;