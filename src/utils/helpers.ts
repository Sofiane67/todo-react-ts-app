import TaskModel from '../components/models/task';
import update from "immutability-helper"

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

export const sortObjectArray = (array: TaskModel[]) => array.sort((a:TaskModel, b:TaskModel) => a.id - b.id);