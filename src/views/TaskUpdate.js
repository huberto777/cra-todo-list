import React, { Component } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import penIcon from 'assets/icons/pen.svg';
import iksIcon from 'assets/icons/iks.svg';

const StyledButtonIcon = styled(ButtonIcon)`
  cursor: pointer;
  margin: 0 auto;
  display: block;
`;

const TD = styled.td`
  padding-right: 5px;
  padding-left: 5px;
`;

const StyledInput = styled(Input)`
  padding: 0 0 0 10px;
  margin: 0;
  width: 650px;
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
    const { onCancel, index } = this.props;
    const { name } = this.state;
    const style2 = { width: '15px' };
    return (
      <>
        <TD>{index + 1}</TD>
        <TD>
          <StyledInput value={name} onChange={this.handleName} />
        </TD>
        <TD style={style2}>
          <StyledButtonIcon type="submit" onClick={this.handleSubmit} icon={penIcon} del />
        </TD>
        <TD style={style2}>
          <StyledButtonIcon type="submit" onClick={onCancel} icon={iksIcon} edit />
        </TD>
      </>
    );
  }
}

export default TaskUpdate;
