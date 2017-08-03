import React, {Component} from 'react';

class User extends Component{
  render(){
    const {name, dateOfBirth, age} = this.props;
    return <div>User Info
      <div>{`${name} ${dateOfBirth.getDate()}.${dateOfBirth.getMonth()}.${dateOfBirth.getFullYear()} Age: ${age}`}</div>
    </div>
  }
}

export default User;