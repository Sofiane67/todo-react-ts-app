import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";
import { XYCoord } from "react-dnd";

const useDragAndDrop= (props: {
    id: number,
    task: string,
    active: boolean,
    moveTask: (dragIndex: number, hoverIndex: number) => void,
    index: number
}, ref:any) => {

    interface DragTask {
        index: number
        id: number
        type: string
    };

    const [{handlerId}, drop] = useDrop({
        accept: "task",
        collect(monitor){
            return {
                handlerId:monitor.getHandlerId(),
            }
        },
        hover(task:DragTask, monitor: DropTargetMonitor){
            if(!ref.current) return;

            const dragIndex = task.index;
            const hoverIndex = props.index;

            if (dragIndex === hoverIndex) {
                return
            }

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }

            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();

            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            // Determine mouse position
            const clientOffset = monitor.getClientOffset();

            // Get pixels to the top
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            // Time to actually perform the action
            props.moveTask(dragIndex, hoverIndex)

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            task.index = hoverIndex

        }
    });

    const [{ isDragging }, drag] = useDrag({
        type: "task",
        
        item: () => {
            return { id:props.index, index: props.index }
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    return {drag, drop}
}

export default useDragAndDrop;