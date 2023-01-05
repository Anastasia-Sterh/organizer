import { useState } from "react";
import Icon from "./utils/Icon";
import ListItem from "./ListItem";



export default function List({ tasks, setTasks, selectedFilter, taskWithContextMenu, setTaskWithContextMenu, category, setCategory }) {
    return (
        <ul>
            {tasks.map(function (task) {
                if (category != undefined) {
                    if (task.category != category) {
                        return '';
                    }
                }


                return <ListItem key={task.id} task={task} setTasks={setTasks} tasks={tasks} taskWithContextMenu={taskWithContextMenu} setTaskWithContextMenu={setTaskWithContextMenu} />
            })}
        </ul>
    )
}