import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const selectChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  }
    return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.selectedYear} onChange={selectChangeHandler} name="years" id="years">
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
