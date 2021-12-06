export default function FilterButton() {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed="true">
      <span className="visually-hidden">Mostar </span>
      <span>Todas</span>
      <span className="visually-hidden"> tarefas</span>
    </button>
  );
}
