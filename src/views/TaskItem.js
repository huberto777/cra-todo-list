import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import penIcon from 'assets/icons/pen.svg';
import removeIcon from 'assets/icons/rubbish-bin.svg';
import TaskUpdate from './TaskUpdate';

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

const TaskItem = ({
  index,
  task,
  currentEditTask,
  editMode,
  onDelete,
  onEdit,
  onActive,
  onUpdate,
  onCancel,
}) => {
  const { id, name, active } = task;
  const style = {};
  const style2 = { width: '15px' };
  if (active) {
    style.backgroundColor = 'yellow';
    style.textDecoration = 'line-through';
    style.color = 'red';
  }
  return (
    <>
      {currentEditTask === id ? (
        <TR>
          <TaskUpdate onCancel={onCancel} task={task} onUpdate={onUpdate} index={index} />
        </TR>
      ) : (
        <TR style={style} className={`${editMode ? 'inactive' : ''}`}>
          <TD style={style2}>{index + 1}.</TD>
          <TD>
            <input
              type="checkbox"
              defaultChecked={active}
              onChange={onActive}
              disabled={editMode}
            />
            {name}
          </TD>
          <TD style={style2}>
            <StyledButtonIcon onClick={onEdit} icon={penIcon} disabled={editMode} edit />
          </TD>
          <TD style={style2}>
            <StyledButtonIcon onClick={onDelete} icon={removeIcon} disabled={editMode} del />
          </TD>
        </TR>
      )}
    </>
  );
};

export default TaskItem;
