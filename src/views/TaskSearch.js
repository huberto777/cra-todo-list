import React from 'react';
import Input from 'components/atoms/Input/Input';

const TaskSearch = ({ onChange }) => (
  <>
    <Input placeholder="search" search onChange={onChange} />
  </>
);

export default TaskSearch;
