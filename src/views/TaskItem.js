import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import penIcon from 'assets/icons/pen.svg';
import removeIcon from 'assets/icons/rubbish-bin.svg';

const TR = styled.tr`
  height: 35px;
  background-color: ${({ theme }) => theme.update};
`;

const TD = styled.td`
  padding-right: 5px;
  padding-left: 5px;
`;

class TaskItem extends Component {
  render() {
    const { id, name, active } = this.props.task;
    const { index, editTask, removeTask, edit, activeMode } = this.props;
    const style = {};
    const style2 = { width: '15px' };
    if (active) {
      style.backgroundColor = 'yellow';
      style.textDecoration = 'line-through';
      style.color = 'red';
    }
    return (
      <TR style={style}>
        <TD style={style2}>{index + 1}.</TD>
        <TD>
          <input type="checkbox" checked={active} onChange={() => activeMode(id)} /> {name}
        </TD>
        {edit || (
          <>
            <TD style={style2}>
              <ButtonIcon onClick={() => editTask(id, name)} icon={penIcon} edit />
            </TD>
            <TD style={style2}>
              <ButtonIcon onClick={() => removeTask(id)} icon={removeIcon} del />
            </TD>
          </>
        )}
      </TR>
    );
  }
}

export default TaskItem;
// export default connect(mapStateToProps, mapDispatchToProps)(Card);
