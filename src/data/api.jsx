const TODO_KEY_IN_LS = 'TODO_KEY_IN_LS'


export async function getTasks(day) {
    const todosFromLS = localStorage.getItem(TODO_KEY_IN_LS + '.' + day)
    const preparedToDo = todosFromLS ? JSON.parse(todosFromLS) : []
    return preparedToDo;

}

export function saveTasks(tasks, day) {
    localStorage.setItem((TODO_KEY_IN_LS + '.' + day), JSON.stringify(tasks))

}