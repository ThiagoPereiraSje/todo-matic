import { useState } from "react";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const addTask = (name) => {
    const newTask = {
      id: tasks.length + 1,
      name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  const editTask = (id, newName) => {
    const edited = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }

      return task;
    });

    setTasks(edited);
  };

  const deleteTask = (id) => {
    const remaining = tasks.filter(
      (task) => id !== task.id
    );
    setTasks(remaining);
  };

  const taskList = tasks.map((t) => (
    <Todo
      key={t.id}
      id={t.id}
      name={t.name}
      completed={t.completed}
      toggleTaskCompleted={toggleTaskCompleted}
      editTask={editTask}
      deleteTask={deleteTask}
    />
  ));

  const tasksNoun = tasks.length > 1 ? "Tarefas" : "Tarefa";
  const headingText = `${tasks.length} ${tasksNoun} restante(s)`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
