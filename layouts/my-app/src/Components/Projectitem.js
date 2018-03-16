import React, { Component } from 'react';


class ProjectsItem extends Component {
  render() {
    console.log(this.props);
    return (
      <li className = "Project">
       {this.props}
      </li>
    );
  }
}



export default Projectsitem;
