import React from 'react';
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

const StyledButtonIcon = styled(ButtonIcon)`
  cursor: pointer;
  margin: 0 auto;
  display: block;
`;

const TaskItem = ({ index, name, active, editTask, removeTask, edit, activeMode }) => {
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
        <input type="checkbox" defaultChecked={active} onChange={activeMode} disabled={edit} />
        {name}
      </TD>
      {edit || (
        <>
          <TD style={style2}>
            <StyledButtonIcon onClick={editTask} icon={penIcon} edit />
          </TD>
          <TD style={style2}>
            <StyledButtonIcon onClick={removeTask} icon={removeIcon} del />
          </TD>
        </>
      )}
    </TR>
  );
};

export default TaskItem;
