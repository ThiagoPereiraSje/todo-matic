import { useEffect, useRef, useState } from "react";
import usePrevious from "../hooks/usePrevious";

export default function Todo({
  name,
  completed = false,
  id,
  toggleTaskCompleted,
  editTask,
  deleteTask,
}) {
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const wasEditing = usePrevious(isEditing);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(id, newName);
    setNewName("");
    setEditing(false);
  };

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }

    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>
          Novo nome para {name}
        </label>
        <input
          id={id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}>
          Cancelar
          <span className="visually-hidden">
            renomeando {name}
          </span>
        </button>
        <button
          type="submit"
          className="btn btn__primary todo-edit">
          Salvar
          <span className="visually-hidden">
            Novo nome para {name}
          </span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => setEditing(true)}
          ref={editButtonRef}>
          Editar{" "}
          <span className="visually-hidden">{name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTask(id)}>
          Excluir{" "}
          <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </div>
  );

  return (
    <li className="todo">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}
