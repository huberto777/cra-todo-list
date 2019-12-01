import React, { Component } from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import TaskUpdate from './TaskUpdate';
import TaskSearch from './TaskSearch';
import TaskAdd from './TaskAdd';

const StyledWrapper = styled.table`
  width: 80%;
  margin: 0 auto;
`;

const HEADER = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const TR = styled.tr`
  height: 35px;
  background-color: ${({ theme }) => theme.add};
`;

const TH = styled.th`
  padding-right: 5px;
  padding-left: 5px;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, name: 'zainstalować linuxa', active: false },
        { id: 2, name: 'zrobić spa w react', active: false },
        { id: 3, name: 'nauczyć się reduxa', active: false },
      ],
      edit: false,
      search: '',
      id: 4,
    };
    this.editTask = this.editTask.bind(this);
  }
  removeTask = id => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks,
    });
  };
  editTask() {
    this.setState({
      id: arguments[0],
      name: arguments[1],
      edit: !this.state.edit,
    });
    // console.log(arguments);
  }
  updateTask = e => {
    e.preventDefault();
    const updatedTask = e.target.updatedTask.value;
    if (updatedTask.length < 3) return;
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === this.state.id) {
          task.name = updatedTask;
        }
        return task;
      }),
      edit: false,
    });
  };
  activeMode = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.active = !task.active;
        }
        return task;
      }),
    });
  };
  editMode = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };
  searchTask = e => {
    this.setState({
      search: e.target.value.toLowerCase(),
    });
  };
  addTask = name => {
    const { tasks } = this.state;
    let task = {
      id: this.state.id,
      name,
      active: false,
    };
    this.setState({
      tasks: [...tasks, task],
      id: this.state.id + 1
    });
  };
  render() {
    const { edit, search } = this.state;
    let tasks = this.state.tasks.filter(task => task.name.toLowerCase().includes(search));
    return (
      <>
        <StyledHeading big>Task list</StyledHeading>
        {!edit ? (
          <HEADER>
            <TaskAdd addTask={this.addTask} />
            <TaskSearch change={this.searchTask} />
          </HEADER>
        ) : (
          <HEADER>
            <TaskUpdate editMode={this.editMode} name={this.state.name} update={this.updateTask} />
          </HEADER>
        )}
        <StyledWrapper>
          <thead>
            {tasks.length !== 0 ? (
              <TR>
                <TH>#</TH>
                <TH>task</TH>
                {edit || (
                  <>
                    <TH>edit</TH>
                    <TH>del</TH>
                  </>
                )}
              </TR>
            ) : (
              <TR>
                <TH>brak zadań</TH>
              </TR>
            )}
          </thead>

          <tbody>
            {tasks.map((task, index) => (
              <TaskItem
                task={task}
                key={task.id}
                index={index}
                removeTask={this.removeTask}
                editTask={this.editTask}
                edit={edit}
                activeMode={this.activeMode}
              />
            ))}
          </tbody>
        </StyledWrapper>
      </>
    );
  }
}

export default TaskList;
