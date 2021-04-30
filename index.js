const Form = (props) => {
    
    const getNewTask = (event) => {
        
        event.preventDefault()
        const value = event.currentTarget[0].value;
        props.setTodoList([...props.todoList, {id: props.todoList.length, name: value, isDone: false}])
        event.currentTarget[0].value = ''
    }
    return (
        <form className='row' onSubmit={getNewTask}>
            <div className='col-6'>   
                <div className='input-group'>
                    <input type='text' className='from-control py-3' placeholder='Enter new task'/>
                    
                </div>
            </div>
                <button type='submit' class='btn btn-primary col-2 py-2'> Add </button>
        </form>
    )
}

const TodoList = (props) => {
    const switchTodo = (id) => {
        const todoArray = props.todoList
        /*todoArray.map(item => {
            item.id === id ? item.isDone =! item.isDone : ''
            return item
        })
        */
        const currentTodo = todoArray.find(item => item.id === id)
        currentTodo.isDone = !currentTodo.isDone
        props.setTodoList([...todoArray])
    }

    const DeleteTodo = (id) => {
        const todoArray = props.todoList
        delete todoArray[id]
        props.setTodoList(todoArray)
    }
    const Todo = () => {
        return (
            <div className='form-check'>
                        <input className='form-check-input' value ='' type='checkbox' id='flexCheckDefault' checked={todo.isDone} onChange={() => switchTodo(todo.id)}/>
                        <label  className='form-check-label'> {todo.name} </label>
                        <button onClick={() => DeleteTodo(todo.id)} type='submit' className='btn btn-secondary col-2 mt-5 py-0'> Delete </button>
                    </div>
        )
    }
    return (
        <section className='form-check'>

                {props.todoList.map((todo) => <Todo todo={todo} />>
                    
                    
                ))}
                
    </section>

    )
    
}

const Main = () => {
    const initialState = [
        {id: 0, name:'learn React', isDone: false}
    ]
    const [todoList, setTodoList] = React.useState(initialState)
    console.log(todoList)
    return (
        <div className='container mt-5'>
            <Form todoList={todoList} setTodoList={setTodoList}/>
            <TodoList todoList={todoList} setTodoList={setTodoList}/>
        </div>        
    )
}

ReactDOM.render(<Main />, document.getElementById('root'))