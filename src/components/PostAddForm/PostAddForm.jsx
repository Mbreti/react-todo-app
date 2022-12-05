import { useState } from "react";
import "./PostAddForm.css";

const PostAddForm = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!value.length || !/[^\s]/gim.test(value)) {
      return;
    }

    onAdd(value);
    setValue("");
  };

  return (
    <form className="bottom-panel d-flex" type="submit" onClick={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="О чем вы думаете сейчас ?"
        className="form-control new-post-label"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Добавить
      </button>
    </form>
  );
};

export default PostAddForm;
