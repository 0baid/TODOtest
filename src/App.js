import React, { Component } from 'react';
import './App.css';
import NavbarComp from './component/navbar';
import BodyComp from './component/body';

class App extends Component {
  state = { 
    tasks:[
        {id:1,count:0,name:"clean the house"},
        {id:2,count:0,name:"bring groceries"},
    ]
  }


  render() { 
    return ( 
      <div>
        <NavbarComp
          count={this.state.tasks.length}
          addtask={this.addtask}
        />
        <BodyComp
            tasks={this.state.tasks}
        />
      </div>
    );
  }

  addtask=taskname=>
    {
      console.log(taskname);
      let lastIndex = this.state.tasks.length;
      lastIndex++;
      let newTask = {id:lastIndex++,count:0,name:taskname};
      console.log(newTask);
      this.setState({tasks:this.state.tasks.concat(newTask)})
    }
}
 
export default App;
