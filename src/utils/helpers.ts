import storage from "redux-persist/lib/storage";

export const updateStorage = (tasksArray: object[]):void => {
    storage.getItem("persist:root")
        .then(dataStored => {
            if(dataStored){
                const{_persist} = JSON.parse(dataStored);
                const tasks = JSON.stringify(tasksArray);
                storage.setItem("persist:root", JSON.stringify({tasks,_persist}));
            }
        }); 
}

export const updateActiveTask = (tasks:[{id: string, task: string, active: boolean}], idTask:string, activeTask:boolean) => {
    return tasks.filter((task:{id: string, task:string, active:boolean}) => {
            if(task.id === idTask){
                task.active = activeTask;
            }
            return task.id === idTask
        });
}

export const taskToDelete = (tasks:[{id: string, task: string, active: boolean}], idTask:string) => {
    const [taskToDelete] = tasks.filter((task:{id:string, task:string, active: boolean}) => task.id === idTask);
    const indexTask = tasks.indexOf(taskToDelete);
    tasks.splice(indexTask,1);
    return tasks;
}

export const filterTasks = (tasks:[{id: string, task: string, active:boolean}], filter: string) => {
    switch (filter) {
        case "Active":
            return tasks.filter((task: {id: string, task: string, active:boolean}) => task.active === true);
        case "Completed":
            return tasks.filter((task: {id: string, task: string, active:boolean}) => task.active === false);      
        default:
            return tasks;;
    }
}