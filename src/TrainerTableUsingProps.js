import React, { Component } from 'react';

class TrainerTableUsingProps extends Component {
    render() {
      return (
        <tr>
            <td>
                {this.props.Trainer.ID}
            </td>
            <td>
                {this.props.Trainer.Trainer}
            </td>
            <td>
                {this.props.Trainer.Skill}
            </td>
        </tr>
           
      );
    }
  }
  
  export default TrainerTableUsingProps;