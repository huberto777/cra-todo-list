import React from 'react';
import { useFormik } from 'formik';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import TaskSearch from 'views/TaskSearch';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.del};
  margin: 0;
`;

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Must have min. 3 characters';
  } else if (values.name.length > 50) {
    errors.name = 'Must have max. 50 characters';
  }
  return errors;
};

const TaskAdd = ({ addTask, onChange }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addTask(values);
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="add task"
      />
      <Button type="submit">Submit</Button>
      <TaskSearch onChange={onChange} />
      {formik.errors.name ? <StyledParagraph>{formik.errors.name}</StyledParagraph> : null}
    </form>
  );
};

// class TaskAdd extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//     };
//   }
//   handleName = e => {
//     this.setState({
//       name: e.target.value,
//     });
//   };
//   add = () => {
//     const { name } = this.state;
//     if (name.length < 3) return;
//     this.props.addTask({ name, active: false });
//     this.setState({
//       name: '',
//     });
//   };
//   render() {
//     const { name } = this.state;
//     return (
//       <>
//         <Input placeholder="add task" value={name} onChange={this.handleName} />
//         <Button onClick={this.add}>ADD</Button>
//       </>
//     );
//   }
// }

export default TaskAdd;
