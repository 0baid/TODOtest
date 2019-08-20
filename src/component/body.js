import React, { Component } from 'react';
import Task from './task';

class body extends Component {

    state = { 
        tasks:this.props.tasks
      }
    
    render() { 
        return ( 
            <div>
                {this.props.tasks.map(task => 
                <Task 
                    key={task.id}
                    task={task}
                    onDelete={this.deleteTask}
                    increment={this.increment}
                    decrement={this.decrement}
                />)}
            </div>
         );
    }





    increment=task=>
    {
        const tasks=[...this.state.tasks];
        const index = tasks.indexOf(task);
        tasks[index] = {...task}
        tasks[index].count++;
        this.setState({tasks});

    }

    decrement=task=>
    {
        const tasks=[...this.state.tasks];
        const index = tasks.indexOf(task);
        tasks[index] = {...task}
        tasks[index].count--;
        this.setState({tasks});
    }



    deleteTask = (taskId) =>
    {  
        console.log(taskId);
        const nTask = this.state.tasks.filter(nt => nt.id!==taskId);
        this.setState({tasks:nTask});
    }











}
 
export default body;