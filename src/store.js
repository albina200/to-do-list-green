import { mainRender } from './index.js';

let TaskListStore = [

]

let TaskListSave = localStorage.getItem('TaskListStore');
if (TaskListSave) {
    TaskListStore = JSON.parse(TaskListSave);
}

export function addTaskStore(textTask) {
    let newTask = { id: '', text: textTask, status: 'work' };
    TaskListStore.unshift(newTask)

    idManeger();
    mainRender();
    Save();
}

function idManeger() {
    for (let i = 0; i < TaskListStore.length; i++) {
        TaskListStore[i].id = i;
    }
}

export function changStatusStore(id) {
    if (TaskListStore[id].status == 'work') {
        TaskListStore[id].status = 'completed';
    } else {
        TaskListStore[id].status = 'work';
    }

    mainRender();
    Save();
}

export function delitTaskStore(id) {
    TaskListStore.splice(id, 1);

    idManeger();
    mainRender();
    Save();
}


function Save() {
    localStorage.setItem('TaskListStore', JSON.stringify(TaskListStore));
}


export default TaskListStore;