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
      <form>
        <h2 className="label-wrapper">
          <label
            htmlFor="new-todo-input"
            className="label__lg">
            O que precisa ser feito?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn btn__primary btn__lg">
          Adicionar
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed="true">
          <span className="visually-hidden">Mostar </span>
          <span>Todas</span>
          <span className="visually-hidden"> tarefas</span>
        </button>
        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed="false">
          <span className="visually-hidden">Mostrar </span>
          <span className="visually-hidden"> tarefas</span>
          <span>Ativas</span>
        </button>
        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed="false">
          <span className="visually-hidden">Mostrar </span>
          <span className="visually-hidden"> tarefas</span>
          <span>Concluídas</span>
        </button>
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
