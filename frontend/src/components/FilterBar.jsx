import '../styles/FilterBar.css'

function FilterBar() {
  return (
    <div className="filter-bar">
      <select>
        <option>Any Day</option>
        <option>Monday</option>
        <option>Tuesday</option>
        <option>...</option>
      </select>
      <select>
        <option>Any Time</option>
        <option>Afternoon</option>
        <option>Evening</option>
      </select>
      <select>
        <option>Any Deal</option>
        <option>Drinks Only</option>
        <option>Drinks + Food</option>
      </select>
    </div>
  )
}

export default FilterBar;