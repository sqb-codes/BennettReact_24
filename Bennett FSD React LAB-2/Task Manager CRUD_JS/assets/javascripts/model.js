class Task {
    constructor(taskId, taskTitle, taskDesc, created, status) {
        this.taskId = taskId;
        this.taskTitle = taskTitle;
        this.taskDesc = taskDesc;
        this.created = created;
        this.status = status;
    }
}

let taskObject = {
    taskList : [],
    addTask : function(taskId, taskTitle, taskDesc, created) {
        let obj = new Task(taskId, taskTitle, taskDesc, created, "open");
        this.taskList.push(obj);
        console.log(this.taskList);
    },

    deleteTask : function() {

    },

    updateTask : function() {

    },

    searchTask : function() {

    },

    sortTask : function() {

    }
}

export default taskObject;