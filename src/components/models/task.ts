import {v4 as uuidv4} from "uuid";

class TaskModel{
    id: string;
    task: string;
    active: boolean;

    constructor(task: string){
        this.id = uuidv4();
        this.task = task;
        this.active = true;
    }
}

export default TaskModel;