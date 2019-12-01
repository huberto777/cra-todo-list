import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const BTN = styled(Button)`
  width: 100px;
  height: 50px;
  margin-right: 10px;
`;

const TaskUpdate = ({ editMode, name, update }) => (
  <form onSubmit={update}>
    <Input defaultValue={name} name="updatedTask" />
    <BTN type="submit" update>
      UPDATE
    </BTN>
    <BTN onClick={editMode} cancel>
      CANCEL
    </BTN>
  </form>
);

export default TaskUpdate;
