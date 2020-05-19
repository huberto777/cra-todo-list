import React, { Component } from 'react';
import FakeApi from 'api/FakeApi';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import TaskItem from './TaskItem';
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
        { id: 3, name: 'nauka reduxa', active: false },
        { id: 4, name: 'nauka js es6', active: false },
      ],
      loading: true,
      error: null,
      edit: false,
      search: '',
    };
  }

  // componentDidMount() {
  //   FakeApi.getAllTasks()
  //     .then(tasks => this.setState({ tasks }))
  //     .catch(error => this.state({ error }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  addTask = taskToAdd => {
    FakeApi.addTask(taskToAdd).then(addedTask =>
      this.setState(prevState => ({
        tasks: [...prevState.tasks, addedTask],
      })),
    );
  };

  removeTask = taskToRemove => {
    FakeApi.removeTask(taskToRemove).then(() =>
      this.setState(prevState => {
        const tasks = prevState.tasks.filter(task => task.id !== taskToRemove.id);
        return { tasks };
      }),
    );
  };

  editTask = task => {
    this.setState({
      task,
      edit: true,
    });
  };

  updateTask = taskToUpdate => {
    FakeApi.replaceTask(taskToUpdate).then(updatedTask =>
      this.setState(prevState => {
        const tasks = prevState.tasks.map(task =>
          task.id === updatedTask.id ? updatedTask : task,
        );
        return { tasks, edit: false };
      }),
    );
  };

  activeMode = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === id) {
          task.active = !task.active;
        }
        return task;
      }),
    }));
  };

  editMode = () => {
    this.setState(prevState => ({
      edit: !prevState.edit,
    }));
  };

  searchTask = e => {
    this.setState({
      search: e.target.value.toLowerCase(),
    });
  };

  render() {
    const { edit, search, task } = this.state;
    const tasks = this.state.tasks.filter(task => task.name.toLowerCase().includes(search));
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
            <TaskUpdate cancelEdit={this.editMode} task={task} onUpdate={this.updateTask} />
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
                name={task.name}
                active={task.active}
                key={task.id}
                index={index}
                removeTask={() => this.removeTask(task)}
                editTask={() => this.editTask(task)}
                edit={edit}
                activeMode={() => this.activeMode(task.id)}
              />
            ))}
          </tbody>
        </StyledWrapper>
      </>
    );
  }
}

export default TaskList;
