export default function Todo({
  name,
  completed = false,
  id,
}) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Editar{" "}
          <span className="visually-hidden">{name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Excluir{" "}
          <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </li>
  );
}
