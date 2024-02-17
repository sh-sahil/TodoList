let todolist = [];

renderTodo();

function renderTodo(){
    let Rendertodo = '';

    todolist.forEach(function(todoObject, index){
        let {name, dueDate, time} = todoObject;

        Rendertodo += `
        <div>${name}</div>
        <div>${dueDate}</div>
        <div>${time}</div>
        
        <button class="delete-button js-delete-button" 
        >Delete</button>
        `;
        
    });

    // for(let i=0; i<todolist.length ; i++){
    //     let html = todolist[i];
    //     //let name = html.name;
    //     //let dueDate = html.dueDate;
    //     let {name, dueDate, time} = html;

    //     Rendertodo += `
    //     <div>${name}</div>
    //     <div>${dueDate}</div>
    //     <div>${time}</div>
        
    //     <button class="delete-button" onclick="
    //         todolist.splice(${i}, 1);
    //         renderTodo();
    //     ">Delete</button>
    //     `;
    // }
    
    document.querySelector('.js-todo-list')
        .innerHTML = Rendertodo;

    document.querySelectorAll('.js-delete-button')
        .forEach((deleteButton,index) =>{
            deleteButton.addEventListener('click',() => {
                todolist.splice(index, 1);
                    renderTodo();
            });
        });
    
}
function enterEvent(event){
    if(event.key === 'Enter'){
        enterTodo();
    }
}




document.querySelector('.js-add-button')
    .addEventListener('click', () => {enterTodo();})

function enterTodo(){
    let inputElement = document.querySelector('.js-todo-input');
    let dateInputElement = document.querySelector('.js-date-input');
    let timeInputElement = document.querySelector('.js-time-input');


    let name = inputElement.value;
    let dueDate = dateInputElement.value;
    let time = timeInputElement.value;

    todolist.push({
        name,
        dueDate,
        time
    });
    inputElement.value = '';
    renderTodo();
}