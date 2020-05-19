import { v4 as uuidv4 } from 'uuid';

function wait(ms = 1000) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

const tasks = [
  { id: 1, name: 'zainstalować linuxa', active: false },
  { id: 2, name: 'zrobić spa w react', active: false },
  { id: 3, name: 'nauka reduxa', active: false },
  { id: 4, name: 'nauka js es6', active: false },
];

function findIndexByAnId(id) {
  const result = tasks.findIndex(task => task.id === id);
  if (result < 0) {
    throw new Error('Task o podanym id nie istnieje');
  }
  return result;
}

const FakeApi = {
  async getAllTasks() {
    await wait();
    return [...tasks];
  },
  async addTask(taskToAdd) {
    await wait(1000);
    const addedTask = { ...taskToAdd, id: uuidv4() };
    tasks.push(addedTask);
    return addedTask;
  },
  async removeTask(taskToRemove) {
    if (!taskToRemove.id) {
      throw new Error('Cannot remove task without an id');
    }
    const index = findIndexByAnId(taskToRemove.id);
    tasks.splice(index, 1);
  },
  async replaceTask(taskToReplace) {
    await wait(1000);
    if (!taskToReplace.id) {
      throw new Error('cannot replace task without an id');
    }
    const index = findIndexByAnId(taskToReplace.id);
    const replacedTask = { ...taskToReplace };
    tasks[index] = replacedTask;
    return replacedTask;
  },
};

export default FakeApi;
