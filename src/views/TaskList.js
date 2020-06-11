import React, { Component } from 'react';
import FakeApi from 'api/FakeApi';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import TaskItem from './TaskItem';
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
      editMode: false,
      search: '',
      currentEditTask: null,
    };
  }

  componentDidMount() {
    FakeApi.getAllTasks()
      .then(tasks => this.setState({ tasks }))
      .catch(error => this.state({ error }))
      .finally(() => this.setState({ loading: false }));
  }

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
      editMode: true,
      currentEditTask: task.id,
    });
  };

  updateTask = taskToUpdate => {
    FakeApi.replaceTask(taskToUpdate).then(updatedTask =>
      this.setState(prevState => {
        const tasks = prevState.tasks.map(task =>
          task.id === updatedTask.id ? updatedTask : task,
        );
        return { tasks, editMode: false, currentEditTask: null };
      }),
    );
  };

  activeMode = ({ id }) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === id) {
          task.active = !task.active;
        }
        return task;
      }),
    }));
  };

  cancelEditMode = () => {
    this.setState({
      editMode: false,
      currentEditTask: null,
    });
  };

  searchTask = e => {
    this.setState({
      search: e.target.value.toLowerCase(),
    });
  };

  render() {
    const { editMode, search, currentEditTask } = this.state;
    const tasks = this.state.tasks.filter(task => task.name.toLowerCase().includes(search));
    return (
      <>
        <StyledHeading big>Task list</StyledHeading>
        {!editMode && (
          <HEADER>
            <TaskAdd addTask={this.addTask} />
            <TaskSearch change={this.searchTask} />
          </HEADER>
        )}
        <StyledWrapper>
          <thead>
            {tasks.length !== 0 ? (
              <TR>
                <TH>#</TH>
                <TH>task</TH>
                <TH>edit</TH>
                <TH>del</TH>
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
                key={task.id}
                index={index}
                task={task}
                currentEditTask={currentEditTask}
                editMode={editMode}
                onDelete={() => this.removeTask(task)}
                onEdit={() => this.editTask(task)}
                onActive={() => this.activeMode(task)}
                onUpdate={this.updateTask}
                onCancel={this.cancelEditMode}
              />
            ))}
          </tbody>
        </StyledWrapper>
      </>
    );
  }
}

export default TaskList;
