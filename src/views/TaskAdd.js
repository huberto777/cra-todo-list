import React, { Component } from 'react';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';

const BTN = styled(Button)`
  width: 100px;
  height: 50px;
  margin-right: 10px;
`;

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
    if (name.length < 3) return alert('the task must be min. 3 characters');
    this.props.addTask(name);
    this.setState({
      name: '',
    });
  };
  render() {
    const { name } = this.state;
    return (
      <>
        <Input placeholder="add task" value={name} onChange={this.handleName} />
        <BTN onClick={this.add}>ADD</BTN>
      </>
    );
  }
}

export default TaskAdd;
