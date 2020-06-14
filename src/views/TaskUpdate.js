import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import penIcon from 'assets/icons/pen.svg';
import iksIcon from 'assets/icons/iks.svg';
import { useFormik } from 'formik';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledButtonIcon = styled(ButtonIcon)`
  cursor: pointer;
  margin: 0 auto;
  display: block;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.del};
  margin: 0;
`;

const TD = styled.td`
  padding-right: 5px;
  padding-left: 5px;
`;

const StyledInput = styled(Input)`
  padding: 0 0 0 10px;
  margin: 0;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 50) {
    errors.name = 'Must be 50 characters or less';
  } else if (values.name.length < 3) {
    errors.name = 'Must have min. 3 characters';
  }
  return errors;
};

const TaskUpdate = ({ task, onUpdate, onCancel, index }) => {
  const formik = useFormik({
    initialValues: {
      name: task.name,
    },
    validate,
    onSubmit: ({ name }) => {
      onUpdate({ ...task, name });
    },
  });
  const style2 = { width: '15px' };
  return (
    <>
      <TD>{index + 1}</TD>
      <TD>
        <StyledInput
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />{' '}
        {formik.errors.name ? <StyledParagraph>{formik.errors.name}</StyledParagraph> : null}
      </TD>

      <TD style={style2}>
        <StyledButtonIcon type="submit" onClick={formik.handleSubmit} icon={penIcon} add />
      </TD>
      <TD style={style2}>
        <StyledButtonIcon type="submit" onClick={onCancel} icon={iksIcon} cancel />
      </TD>
    </>
  );
};

export default TaskUpdate;
