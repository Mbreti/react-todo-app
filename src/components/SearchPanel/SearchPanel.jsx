import { useState } from "react";
import "./SearchPanel.css";

const SearchPanel = ({ onUpdateSearchHandler }) => {
  const [term, setTerm] = useState("");

  const onUpdateSearch = (event) => {
    const term = event.target.value;
    onUpdateSearchHandler(term);
    setTerm(term);
  };

  return (
    <input
      className="form-control search-input"
      type="text"
      value={term}
      onChange={onUpdateSearch}
      placeholder="Поиск по записям"
    />
  );
};

export default SearchPanel;
