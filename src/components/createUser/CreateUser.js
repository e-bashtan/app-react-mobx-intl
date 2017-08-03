import React, {Component} from 'react';

class CreateUser extends Component{
  state = {
    name:'',
    dateOfBirth: null
  };

  onAdd = () =>{
    const {name, dateOfBirth} = this.state;
    !!this.props.onAdd && this.props.onAdd({name, dateOfBirth})
  };

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  };

  handleDateChange = (event) => {
    this.setState({dateOfBirth: this.parseDate(event.target.value)});
  };

  parseDate(val) {
    const splitted = val.split(/\D/);
    return new Date(splitted[0], --splitted[1], splitted[2]);
  }

  render(){
    return  <div>
      <input type="text" placeholder="Enter name" onChange={this.handleNameChange}/>
      <input type="date" placeholder="Enter date of birth" onChange={this.handleDateChange}/>
      <button onClick={this.onAdd}>Add</button>
    </div>
  }
}

export default CreateUser;