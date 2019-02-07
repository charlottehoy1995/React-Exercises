import React, { Component } from 'react';



class DropDownBar extends React.Component {
  constructor(){
    super();
    this.state = {
     java: [
         {
            Skill: "Java",
            Trainer: "Matt, Eve"
         },
         {
            Skill: "SQL",
            Trainer: "Sophie" 
         },
         {
            Skill: "Python",
            Trainer: "Sophie"
         },
         {
            Skill: "HTML",
            Trainer: "Sophie" 
         },
         {
            Skill: "JavaScript",
            Trainer: "Matt, Eve"
         }
     ]
    }
}

render() {
  return (
    <div class="dropdown">
    <button class="dropbtn">Search Skills</button>
    <div class="dropdown-content">
      <a href="#">Java</a>
      <a href="#">SQL</a>
      <a href="#">Python</a>
      <a href="#">HTML</a>
      <a href="#">JavaScript</a>

    </div>
  </div>


       
  );
}
}

export default DropDownBar;