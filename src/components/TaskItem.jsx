import { changStatusStore } from '../store.js';
import { delitTaskStore } from '../store.js';

function TaskItem(props) {
    function changStatusButtonClick(e) {
        let taskId = e.target.parentNode.id;
        changStatusStore(taskId);
    }

    function delitTaskButtonClick(e) {
        let taskId = e.target.parentNode.id;
        delitTaskStore(taskId);
    }

    return (
        <div className={'app__task-item ' + props.status} id={props.id} key={props.id}>
            <p>{props.text}</p>
            <button onClick={changStatusButtonClick}><i className="fa-solid fa-check"></i></button>
            <button onClick={delitTaskButtonClick}><i className="fa-solid fa-xmark"></i></button>
        </div>
    )
}

export default TaskItem;