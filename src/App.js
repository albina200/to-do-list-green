import './App.css';
import TaskItem from './components/TaskItem.jsx';
import TaskListStore from './store.js';
import { addTaskStore } from './store.js';

function App() {
  let TaskItems = TaskListStore.map((TaskItemInfo) => {
    return <TaskItem text={TaskItemInfo.text} id={TaskItemInfo.id} status={TaskItemInfo.status} key={TaskItemInfo.id} />
  })

  function addTaskButtonClick(e) {
    // let button = e.target;
    // let buttonPerents = button.parentNode;
    // let input = buttonPerents.querySelector('input');
    if (e.target.parentNode.querySelector('input').value != '') {
      let taskText = e.target.parentNode.querySelector('input').value;
      addTaskStore(taskText);
      e.target.parentNode.querySelector('input').value = '';
    }
  }
  function inputButtonDown(e) {
    if (e.key == "Enter" && e.target.value !='') {
      addTaskStore(e.target.value);
      e.target.value = '';
    }
  }

  return (
    <div className="App">
      <h1>Список задач</h1>

      <div className='app__new-task'>
        <input onKeyDown={inputButtonDown} placeholder='Введи текст задачи'></input>
        <button onClick={addTaskButtonClick} ><i className="fa-solid fa-plus"></i></button>
      </div>

      <div className='app__task-list'>
        {TaskItems}
      </div>
    </div>
  );
}

export default App;
