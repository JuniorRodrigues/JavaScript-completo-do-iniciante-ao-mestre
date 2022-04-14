/* COMPARAR CÓDIGO NO FUTURO - este está incompleto */
// ;(() => {
//     'use strict';

//     const inputRegister = document.getElementsByClassName('inputItem')[0];
//     const todoAddForm   = document.getElementById('todo-add');
//     const todoList      = document.getElementById('todo-list');

//     let tasks = [
//         {
//             name: 'Task 1',
//             createdAt: Date.now(),
//             completed: false
//         }
//     ];

//     const taskUpdater = function (taskName) {
//         tasks.push({
//             name: taskName,
//             createdAt: Date.now(),
//             completed: false
//         });
//     }

//     const taskBuilder = function (obj) {
//         const task = `
//             <li class="todo-item" id="${obj.createdAt}">
//                 <button class="button-check" data-action="check">
//                     <i class="fas fa-check displayNone"></i>
//                 </button>
//                 <p class="task-name">${obj.name}</p>
//                 <i class="fas fa-edit" data-action="edit"></i>
//                 <div class="editContainer">
//                     <input class="editInput" type="text">
//                     <button class="editButton">Edit</button>
//                     <button class="cancelButton">Cancel</button>
//                 </div>
//                 <i class="fas fa-trash-alt" data-action="delete"></i>
//             </li>
//         `;

//         return task;
//     }

//     const taskRender = function () {
//         tasks.forEach(task => {
//             todoList.insertAdjacentHTML('afterbegin', taskBuilder(task))
//         });
//     }

//     const addTask = function (e) {
//         e.preventDefault();
//         if (!inputRegister.value) return;

//         taskUpdater(inputRegister.value);

//         const task = taskBuilder(tasks[tasks.length - 1]);

//         todoList.insertAdjacentHTML('afterbegin', task);
//         inputRegister.value = '';
//         inputRegister.focus();
//     };

//     const taskOptions = function (e) {
//         if (!e.target.dataset.action) return;

//         const actionName = e.target.dataset.action;
//         const runAction = {
//             check:  () => 'check',
//             edit:   () => 'edit',
//             delete: () => 'delete'
//         };

//         console.log(runAction[actionName]());
//     }

//     taskRender();
//     todoAddForm.onsubmit = addTask;
//     todoList.onclick = taskOptions;
// })();


'use strict';

// X+1 improve this function please!
HTMLElement.prototype.parents = function (selector) {
    let parent = this;
    const [classNotation, idNotation] = ['.', '#'];

    if (selector.includes(classNotation)) {
        selector = selector.replace(/\./, '')

        while(!parent.classList.contains(selector)) {
            parent = parent.parentElement;
        }
    } else if (selector.includes(idNotation)) {
        selector = selector.replace(/\#/, '');

        while(parent.id !== selector) {
            parent = parent.parentElement;
        }
    } else {
        while(parent.localName !== selector) {
            parent = parent.parentElement;
        }
    }

    return parent;
}

;(function () {
    const inputNewItem  = document.getElementById('item-input');
    const formTodo      = document.getElementById('todo-add');
    const todoList      = document.getElementById('todo-list');
    const todoItems     = todoList.getElementsByClassName('todo-item');

    function getSavedData () {
        let tasksData = localStorage.getItem('datatasks');
        tasksData = JSON.parse(tasksData);

        return (tasksData && tasksData.length)
            ? tasksData
            : [
                {
                    id: Date.now(),
                    content: 'Example',
                    completed: true
                },
                {
                    id: Date.now() + 1,
                    content: 'JS Master',
                    completed: false
                }
            ]
        ;
    }

    function setNewData () {
        localStorage.setItem('datatasks', JSON.stringify(tasks))
    }

    let tasks = getSavedData();
    setNewData();


    function sanitize (str) {
        return str.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/"/g, '&quot;');
    }

    function addTask (e) {
        e.preventDefault();
        const txt = inputNewItem.value;

        if (!txt) return;

        tasks.push({
            id: Date.now(),
            content: sanitize(txt),
            completed: false
        });

        setNewData();

        createListItem(tasks[tasks.length - 1]);

        inputNewItem.value = '';
        inputNewItem.focus();
    }

    function createListItem (obj) {
        const item = `
            <li class="todo-item${obj.completed ? ' done' : ''}" id="${obj.id}">
                <button class="button-check" data-action="done">
                    <i class="fas fa-check"></i>
                </button>
                <p class="task-name">${obj.content}</p>
                <i class="fas fa-edit" data-action="edit"></i>
                <div class="editContainer">
                    <input type="text" class="editInput">
                    <button class="editButton" data-action="editInput">Edit</button>
                    <button class="cancelButton" data-action="editCancel">Cancel</button>
                </div>
                <i class="fas fa-trash fa-trash-alt" data-action="del"></i>
            </li>
        `;

        todoList.insertAdjacentHTML('beforeend', item);
    }

    function runAction (event) {
        event.preventDefault();
        const dataAction = event.target.dataset.action;
        if (!dataAction) return;

        const currentLi = event.target.parents('.todo-item');
        const index = [...todoItems].indexOf(currentLi);

        const action = {
            edit: function () {
                const siblings = [...todoList.querySelectorAll('.editContainer')];

                siblings.forEach(sibling => sibling.style.display = 'none');
                currentLi.querySelector('.editContainer').style.display = 'flex';
                const editInput = currentLi.querySelector('.editInput');
                editInput.value = tasks[index].content;
                editInput.focus();
            },
            done: function () {
                tasks[index].completed = !tasks[index].completed;
                currentLi.classList.toggle('done');
                setNewData();
            },
            del: function () {
                tasks.splice(index, 1);
                taskRender();
                setNewData();
            },
            editInput: function () {
                const newValue = currentLi.querySelector('.editInput').value;
                tasks[index].content = newValue || tasks[index].content;
                taskRender();
                setNewData();
            },
            editCancel: function () {
                currentLi.querySelector('.editContainer').style.display = 'none';
            }
        }

        action[dataAction]();
    }

    function taskRender () {
        todoList.innerHTML = '';

        for (let task of tasks) {
            createListItem({
                content: task.content,
                id: task.id,
                completed: task.completed
            });
        }
    };

    taskRender();
    formTodo.addEventListener('submit', addTask);
    todoList.addEventListener('click', runAction);
})();
