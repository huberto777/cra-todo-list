import React, { Component } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const BTN = styled(Button)`
  width: 100px;
  height: 50px;
  margin-right: 10px;
`;

class TaskUpdate extends Component {
  state = {
    name: this.props.task.name,
  };
  handleName = e => {
    this.setState({
      name: e.target.value,
    });
  };
  handleSubmit = () => {
    const { name } = this.state;
    const { onUpdate, task } = this.props;

    if (name.length < 3) return;
    onUpdate({ ...task, name });
  };
  render() {
    const { cancelEdit } = this.props;
    const { name } = this.state;
    return (
      <>
        <Input value={name} onChange={this.handleName} />
        <BTN type="submit" update onClick={this.handleSubmit}>
          UPDATE
        </BTN>
        <BTN onClick={cancelEdit} cancel>
          CANCEL
        </BTN>
      </>
    );
  }
}

export default TaskUpdate;
