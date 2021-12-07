import { useEffect, useRef, useState } from "react";
import usePrevious from "./hooks/usePrevious";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const listHeadingRef = useRef(null);
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");
  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

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

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((t) => (
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

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNoun = tasks.length > 1 ? "Tarefas" : "Tarefa";
  const headingText = `${tasks.length} ${tasksNoun} restante(s)`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2
        id="list-heading"
        tabIndex="-1"
        ref={listHeadingRef}>
        {headingText}
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
