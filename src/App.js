import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App({ tasks }) {
  console.log(tasks);

  const taskList = tasks.map((t) => (
    <Todo
      key={t.id}
      id={t.id}
      name={t.name}
      completed={t.completed}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tarefas restantes</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
