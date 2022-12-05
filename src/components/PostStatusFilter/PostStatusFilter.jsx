import { useState } from "react";
import "./PostStatusFilter.css";

const PostStatusFilter = ({ filter, onFilterSelect }) => {
  const [buttons, setButtons] = useState([
    { name: "all", label: "Все" },
    { name: "like", label: "Понравилось" },
  ]);

  return (
    <div className="btn-group">
      {buttons.map(({ name, label }) => {
        const active = filter === name;
        const clazz = active ? "btn-info" : "btn-outline-secondary";

        return (
          <button
            key={name}
            onClick={() => onFilterSelect(name)}
            type="button"
            className={`btn ${clazz}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default PostStatusFilter;
