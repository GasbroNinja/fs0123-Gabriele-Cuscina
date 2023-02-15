document.addEventListener('DOMContentLoaded', (event) => {

let todo = document.querySelector('header input[type=text]')
let todoSend = document.querySelector('#add')
let main = document.querySelector('main')
let tasks = []

todoSend.addEventListener('click',function (e) {
    if( todo.value ){
        let newtask = createTask(tasks.push(todo.value),todo)
        main.appendChild(newtask)
    }
})


function createTask (id,todo) {
    let newTask = document.createElement("div");
        newTask.classList.add('task')
        newTask.setAttribute("id", "task_" + id)
        newTask.textContent = todo.value

    let newDelete = document.createElement("input");
        newDelete.classList.add('close')
        newDelete.setAttribute("type","button")

        newTask.addEventListener('click',function(e){
            newTask.classList.toggle('completed')
        })

        newDelete.addEventListener('click',function(e){
            tasks.splice(id - 1 , 1);
            newTask.remove()
        })

        newTask.appendChild(newDelete)

        return newTask
}
});


