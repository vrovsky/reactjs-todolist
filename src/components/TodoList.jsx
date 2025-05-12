import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, handleDeleteTodo } = props;
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard {...props} key={todoIndex} index={todoIndex}>
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
