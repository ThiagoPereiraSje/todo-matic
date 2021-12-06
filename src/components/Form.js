import { useState } from "react";

export default function Form({ addTask }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      return;
    }

    addTask(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn__primary btn__lg">
        Adicionar
      </button>
    </form>
  );
}
