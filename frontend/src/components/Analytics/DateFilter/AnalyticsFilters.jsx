import "./AnalyticsFilters.css";

function AnalyticsFilters({
  selectedFilter,
  setSelectedFilter,
}) {
  const filters = [
    "7 Days",
    "30 Days",
    "90 Days",
    "All Time",
  ];

  return (
    <div className="analytics-filters">

      {filters.map((filter) => (
        <button
          key={filter}
          className={
            selectedFilter === filter
              ? "filter-btn active"
              : "filter-btn"
          }
          onClick={() =>
            setSelectedFilter(filter)
          }
        >
          {filter}
        </button>
      ))}

    </div>
  );
}

export default AnalyticsFilters;