import { useEffect, useState } from "react";
import Icon from "./utils/Icon";


export default function ListItem({ task, tasks, setTasks, taskWithContextMenu, setTaskWithContextMenu }) {



    let delItem = () => {
        if (!confirm('Вы точно хотите удалить задачу?')) {
            return;
        } else {
            setTasks(tasks.filter(del => task.id != del.id))
        }
    }

    let crossOutItem = () => {
        console.log(task); // { id: 1, text: 'asdasd', status: false }

        let someVal = [];

        for (const oldTask of tasks) {
            if (oldTask.id == task.id) {
                // Это та же задача, которую мы хотим изменить
                const newTask = { ...oldTask, status: !oldTask.status };

                someVal.push(newTask);

            } else {
                // Это какая-то другая задача
                someVal.push(oldTask);
            }
        }

        setTasks(someVal)
    }

    let setItemCategory = (category) => {
        console.log(task); // { id: 1, text: 'asdasd', status: false }

        let someVal = [];

        for (const oldTask of tasks) {
            if (oldTask.id == task.id) {
                // Это та же задача, которую мы хотим изменить
                const newTask = { ...oldTask, category: category };

                someVal.push(newTask);

            } else {
                // Это какая-то другая задача
                someVal.push(oldTask);
            }
        }

        setTasks(someVal)
    }


    let openContextMenu = (event) => {
        console.log(event)
        event.preventDefault();


        setTaskWithContextMenu(task)
    }

    let colorOfCategory = () => {

        if (task.category == 'Семья') {
            return 'div_li--family'
        }
        if (task.category == 'Карьера') {
            return 'div_li--career'
        }
        if (task.category == 'Друзья') {
            return 'div_li--friends'
        }
        if (task.category == 'Хобби') {
            return 'div_li--hobbie'
        }
        if (task.category == 'Саморазвитие') {
            return 'div_li--growth'
        }
        if (task.category == 'Здоровье') {
            return 'div_li--health'
        }


    }

    const correctDivLiClassName = colorOfCategory();

    return (
        <li>

            {taskWithContextMenu == task && (
                <>
                    <div className="all_screen" onClick={(e) => setTaskWithContextMenu(false)}></div>
                    <div className="contextMenu">
                        <p onClick={() => { setItemCategory('Семья') }}>Семья</p>
                        <p onClick={() => { setItemCategory('Друзья') }}>Друзья</p>
                        <p onClick={() => { setItemCategory('Карьера') }}>Карьера</p>
                        <p onClick={() => { setItemCategory('Здоровье') }}>Здоровье</p>
                        <p onClick={() => { setItemCategory('Хобби') }}>Хобби</p>
                        <p onClick={() => { setItemCategory('Саморазвитие') }}>Саморазвитие</p>
                    </div>
                </>
            )}



            <div className={'div_li' + ' ' + correctDivLiClassName} onContextMenu={openContextMenu}>
                <span key={task.id} className={task.status ? 'text_decoration' : ''}> {task.text} </span>

                <div className="div_li_buttons">
                    <button className="li_button" onClick={delItem}>
                        <Icon icon='trash-can' />
                    </button>

                    <button className="check_button li_button " onClick={crossOutItem} >
                        <Icon icon='check' />
                    </button>
                </div>
            </div>
        </li>
    )
}