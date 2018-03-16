import React, { Component } from 'react';
import Projects from './Components/Projects'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state= {
      projects: [
        {
          title: 'Layout1',
          category: 'project'
        },
        {
          title: 'Layout2',
          category: 'project'
        },
        {
          title: 'Layout3',
          category: 'project'
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        my app
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}



export default App;
