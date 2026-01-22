import { useState } from "react";
import { FilterOptions } from "../constants/data.const";
import { FilterName, FiltersProps } from "../models/app.models";

function Filters(props: FiltersProps) {
  const [selectedFilter, setSelectedFilter] = useState(FilterOptions[0]);

  const filterDiv = FilterOptions.map((f) => (
    <button
      name={f.toLocaleLowerCase()}
      key={f.toLocaleLowerCase()}
      type="button"
      className="btn btn-toggle"
      aria-pressed={f === selectedFilter}
      onClick={() => handleFilterClick(f)}
    >
      <span className="hidden">Show </span>
      <span>{f}</span>
      <span className="hidden"> tasks</span>
    </button>
  ));

  function handleFilterClick(filter: FilterName) {
    console.log(filter);
    if (filter !== selectedFilter) {
      setSelectedFilter(filter);
      props.changeFilter(filter);
    }
  }

  return (
    <div className="mx-auto overflow-hidden border rounded-full border-stone-300">
      {filterDiv}
    </div>
  );
}

export default Filters;
