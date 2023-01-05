import { useState } from "react";
import List from "./List"
import Icon from "./utils/Icon"
import CountTasks from "./CountTasks";
import { useEffect } from "react";
import { saveTasks } from "../data/api";
import { getTasks } from "../data/api";

export default function Form({ day, taskWithContextMenu, setTaskWithContextMenu }) {

    const [tasks, setTasks] = useState([]);
    const TODO_KEY_IN_LS = 'TODO_KEY_IN_LS'

    // Выполняется один раз когда <Form> создаётся
    useEffect(() => {
        getTasks(day)
            .then(x => {
                if (x.length) {
                    setTasks(x);
                }
            })


    }, [])

    // Выполняется каждый раз, когда изменяется tasks
    useEffect(() => {
        saveTasks(tasks, day)
    }, [tasks])


    const [value, setValue] = useState('');

    function addElement() {
        let newArr = []
        if (tasks.length > 0) {
            for (let el of tasks) {
                newArr.push(el.id)

            }

            if (value.trim() == '') {
                alert('Напишите чего-нибудь для приличия!')
                return
            }
            setTasks(tasks.concat({ id: Math.max.apply(null, newArr) + 1, text: value })); setValue('')

        } else {
            if (value.trim() == '') {
                alert('Напишите чего-нибудь для приличия!')
                return
            }
            setTasks(tasks.concat({ id: tasks.length + 1, text: value })); setValue('')
        }
    }

    const [openFilter, setOpenFilter] = useState(false)

    let myMenu = '';


    if (openFilter == true) {
        myMenu =
            <>
                <div className="all_screen" onClick={(e) => { setOpenFilter(false) }}></div>
                <div className="contextMenu">
                    <p onClick={() => { setCategory('Семья'); setOpenFilter(false) }}>Семья</p>
                    <p onClick={() => { setCategory('Друзья'); setOpenFilter(false) }}>Друзья</p>
                    <p onClick={() => { setCategory('Карьера'); setOpenFilter(false) }}>Карьера</p>
                    <p onClick={() => { setCategory('Здоровье'); setOpenFilter(false) }}>Здоровье</p>
                    <p onClick={() => { setCategory('Хобби'); setOpenFilter(false) }}>Хобби</p>
                    <p onClick={() => { setCategory('Саморазвитие'); setOpenFilter(false) }}>Саморазвитие</p>

                </div>
            </>
    }

    const [category, setCategory] = useState()

    return (

        <div className="form">
            <div className="form_top">

                {myMenu}

                <h1 >{day}</h1>
                <Icon icon='filter' color='grey' style={{ textShadow: '1px 1px 1px black', cursor: 'pointer' }} onClick={() => { setOpenFilter(true) }} />
            </div>

            <div className="container_form_input">
                <input className="form_input" value={value} type='text' placeholder="Что вы хотите сделать?"
                    onChange={(event) => { setValue(event.target.value) }}
                    onKeyDown={(event) => {
                        if (event.key == 'Enter') {
                            addElement()
                        }
                    }} />
                <button className="form_button" onClick={() => {
                    addElement()
                }}>
                    <Icon icon="rocket" />
                </button>

            </div>

            <List tasks={tasks} setTasks={setTasks} taskWithContextMenu={taskWithContextMenu} setTaskWithContextMenu={setTaskWithContextMenu} category={category} setCategory={setCategory} />
            <CountTasks tasks={tasks} setTasks={setTasks} />
        </div>

    )
}

