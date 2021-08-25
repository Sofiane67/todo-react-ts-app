class TaskModel{
    id: number;
    task: string;
    active: boolean;

    constructor(task: string){
        this.id = new Date().getTime();
        this.task = task;
        this.active = true;
    }
}

export default TaskModel;