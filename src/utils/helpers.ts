import storage from "redux-persist/lib/storage";
import TaskModel from '../components/models/task';
import update from "immutability-helper"

export const updateStorage = (tasksArray: TaskModel[]):void => {
    storage.getItem("persist:root")
        .then(dataStored => {
            if(dataStored){
                const{_persist} = JSON.parse(dataStored);
                const tasks = JSON.stringify(tasksArray);
                storage.setItem("persist:root", JSON.stringify({tasks,_persist}));
            }
        }); 
}

export const updateActiveTask = (tasks: TaskModel[], idTask:number, activeTask:boolean) => {
    return tasks.filter((task:TaskModel) => {
            if(task.id === idTask){
                task.active = activeTask;
            }
            return task.id === idTask
        });
}

export const taskToDelete = (tasks:TaskModel[], idTask:number) => {
    const [taskToDelete] = tasks.filter((task:TaskModel) => task.id === idTask);
    const indexTask = tasks.indexOf(taskToDelete);
    tasks.splice(indexTask,1);
    return tasks;
}

export const filterTasks = (tasks:TaskModel[], filter: string) => {
    switch (filter) {
        case "Active":
            return tasks.filter((task: TaskModel) => task.active === true);
        case "Completed":
            return tasks.filter((task: TaskModel) => task.active === false);      
        default:
            return tasks;;
    }
}



export const moveTaskHelper = (tasks:TaskModel[], filterFct:Function) => {
    return (dragIndex: number,hoverIndex: number) => {
        const dragTask = tasks[dragIndex];
        filterFct(update(tasks, {
            $splice: [
                [dragIndex,1],
                [hoverIndex,0,dragTask]
            ]
        }));
    }
}