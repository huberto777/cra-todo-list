import React, { Component } from 'react';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

class TaskAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  handleName = e => {
    this.setState({
      name: e.target.value,
    });
  };
  add = () => {
    const { name } = this.state;
    if (name.length < 3) return;
    this.props.addTask({ name, active: false });
    this.setState({
      name: '',
    });
  };
  render() {
    const { name } = this.state;
    return (
      <>
        <Input placeholder="add task" value={name} onChange={this.handleName} />
        <Button onClick={this.add}>ADD</Button>
      </>
    );
  }
}

export default TaskAdd;
