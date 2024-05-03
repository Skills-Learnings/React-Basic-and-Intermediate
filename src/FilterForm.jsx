export function FilterForm({
  nameInput,
  setNameInput,
  hideCheck,
  setHideCheck,
}) {
  return (
    <div className="filter-form">
      <div className="filter-form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={hideCheck}
          onChange={(e) => setHideCheck(e.target.checked)}
        />
        Hide Completed
      </label>
    </div>
  )
}
