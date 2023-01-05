import { useState } from "react";
import Icon from "./utils/Icon";
import { pluralForm } from "../utils/functions";

export default function CountTasks({ tasks, setTasks }) {

    if (tasks.length > 0) {
        return (<p> У вас тут {tasks.length} {pluralForm(tasks.length, 'задачка', 'задачки', 'задачек')} <button className="form_button" onClick={() => {
            if (!confirm('Вы точно хотите удалить все задачи?')) {
                return;
            } setTasks([])
        }}>
            <Icon icon='trash-can' /></button></p>)
    }

}

