import TodoCard from "./TodoCard"


export default function TodoList(props) {
    // props is use to pass the data 
    //coz using used todos on App.jsx
    const { todos } = props
  return (
    <div className="main">
        {todos.map((todo, todoIndex) => {
            return (
                <TodoCard {...props} key={todoIndex} index={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </div>
  )
}
