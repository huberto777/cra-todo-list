import React from 'react';
import Input from 'components/atoms/Input/Input';

const TaskSearch = ({change}) => (
  <>
    <Input placeholder="search" search onChange={change} />
  </>
);

export default TaskSearch;
