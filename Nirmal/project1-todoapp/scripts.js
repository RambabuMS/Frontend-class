var tasks = [];

let pendingList = document.querySelector('#pending-task-list');
let completedList = document.querySelector('#completed-task-list');

const newTaskInput = document.querySelector('#p-task');

function AddNewTask() {

    if (newTaskInput.value.trim().length < 1) {
        return;
    }

    let task = {
        id: Date.now(),
        name: newTaskInput.value,
        completed: false
    }

    tasks.push(task);
    UpdatePendingTaskGUI(task);

    newTaskInput.value = "";
}

function UpdatePendingTaskGUI(task) {
    const listItem = document.createElement('li');
    listItem.setAttribute("id", task.id);
    listItem.innerText = task.name;

    const completeBtn = document.createElement('button');
    completeBtn.addEventListener('click', () => {
        CompleteTask(task);
    });
    completeBtn.innerText = "Complete Task";

    const deleteBtn = document.createElement('button');
    deleteBtn.addEventListener('click', () => {
        DeleteTask(task.id);
    });
    deleteBtn.innerText = "Delete Task";

    listItem.appendChild(completeBtn);
    listItem.appendChild(deleteBtn);

    pendingList.appendChild(listItem);
}


function CompleteTask(task) {
    task.completed = true;
    document.getElementById(task.id).remove();
    UpdateCompletedTaskGUI(task);
}

function DeleteTask(taskID) {
    tasks.forEach((task, index) => {
        if (task.id == taskID) {
            tasks.splice(index, 1);
            return;
        }
    });

    document.getElementById(taskID).remove();
}

function UpdateCompletedTaskGUI(task) {
    const listItem = document.createElement('li');
    listItem.setAttribute("id", task.id);
    listItem.innerText = task.name;

    const undoBtn = document.createElement('button');
    undoBtn.addEventListener('click', () => {
        UndoTask(task);
    });
    undoBtn.innerText = "Undo";

    listItem.appendChild(undoBtn);

    completedList.appendChild(listItem);
}

function CreateListItem(task)
{

}

function UndoTask(task) {
    task.completed = false;
    document.getElementById(task.id).remove();
    UpdatePendingTaskGUI(task);
}