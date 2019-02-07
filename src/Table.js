import React, { Component } from 'react';
import TrainerTableUsingProps from './TrainerTableUsingProps.js';


class Table extends Component {
    constructor(){
        super();
        this.state = {
         trainers: [
             {
                 ID: "120",
                 Trainer: "Matt Smith",
                 Skill: "Java, JavaScipt"
             },
             {
                ID: "158",
                Trainer: "Eve Jackson",
                Skill: "JavaScript, Java" 
             },
             {
                ID: "101",
                Trainer: "Sophie Newton",
                Skill: "SQL, Python, HTML"
             }
         ]
        }
    }

    render() {
      return (
    <div>
    <div>
    <table width="800" align="center" class="table table-striped">
    
        <tr>
            <th>ID</th>
            <th>Trainer</th> 
            <th>Skill</th>
        </tr>

        {
            this.state.trainers.map((Trainer) => (
                <TrainerTableUsingProps key = {Trainer.ID.toString()} Trainer={Trainer} />
            ))
        }

    </table>
    
    </div>
    </div>

      );
    }
  }
  
  export default Table;