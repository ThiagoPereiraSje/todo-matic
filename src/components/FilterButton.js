const labels = {
  All: "Todas",
  Active: "Ativas",
  Completed: "Concluídas",
};

export default function FilterButton({
  name,
  isPressed,
  setFilter,
}) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}>
      <span className="visually-hidden">Mostar </span>
      <span>{labels[name]}</span>
      <span className="visually-hidden"> tarefas</span>
    </button>
  );
}
