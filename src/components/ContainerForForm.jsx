import List from "./List";
import Form from "./Form";
import CountTasks from "./CountTasks";
import { useState } from "react";

export function ContainerForForm() {

    const [taskWithContextMenu, setTaskWithContextMenu] = useState(false)

    const contextMenuProps = {
        taskWithContextMenu: taskWithContextMenu,
        setTaskWithContextMenu: setTaskWithContextMenu,
    };

    return (
        <div className="container_for_form">
            <Form day={'Понедельник'} {...contextMenuProps} />
            <Form day={'Вторник'} {...contextMenuProps} />
            <Form day={'Среда'} {...contextMenuProps} />
            <Form day={'Четверг'} {...contextMenuProps} />
            <Form day={'Пятница'} {...contextMenuProps} />
            <Form day={'Суббота'} {...contextMenuProps} />
            <Form day={'Воскресенье'} {...contextMenuProps} />
        </div>
    )
}