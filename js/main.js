var todoService = new TodoService();
function renderTaskList() {
    todoService.getListTask()
        .then(function (e) {
            var t = "", n = "";
            getEle("todo").innerHTML = "",
                getEle("completed").innerHTML = "",
                e.data && e.data.length > 0 && e.data.forEach(function (e) {
                    "todo" === e.status ? (t += renderListLiHtml(e),
                        getEle("todo").innerHTML = t)
                        : "completed" === e.status && (n += renderListLiHtml(e),
                            getEle("completed").innerHTML = n)
                })
        })
        .catch(function (e) {
            console.log(e)
        })
}
function renderListLiHtml(e) {
    return `<li>  <span>${e.textTask}</span> 
                    <div class="buttons">      
                        <button class="remove" onclick="deleteToDo(${e.id})">      
                                        <i class="fa fa-trash-alt"></i>      
                        </button>      
                        <button class="complete" onclick="changeStatus(${e.id})"      >       
                                        <i class="far fa-check-circle"></i>     
                                         <i class="fas fa-check-circle"></i>      
                        </button>    
                    </div> 
             </li>` }
function deleteToDo(e) {
    todoService.deleteTask(e)
        .then(function () {
            // alert("Delete Success!"),
            renderTaskList()
        })
        .catch(function (e) {
            console.log(e)
        })
}
function changeStatus(e) {
    todoService.getTaskById(e)
        .then(function (e) {
            var t = e.data;
            return t.status = "todo" === t.status ? "completed" : "todo",
                todoService.updateTask(t);
        })
        .then(function () {
            // alert("Change Status Success!");
            renderTaskList();
        })
}
function getEle(e) {
    return document.getElementById(e);
}
renderTaskList();
getEle("addItem").addEventListener("click", function () {
    var e = getEle("newTask").value;
    if ("" !== e) {
        var t = new Task(e, "todo");
        todoService.addTask(t)
            .then(function () {
                // alert("Add Success!"),
                renderTaskList(),
                    getEle("newTask").value = ""
            })
            .catch(function (e) { console.log(e) })
    }
    // else alert("Task empty!")
});