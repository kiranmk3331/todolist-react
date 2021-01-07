import React, { useState } from "react";

function Input(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitData = (e) => {
    e.preventDefault();
    props.handleSubmit(input);
    setInput("");
  };

  return (
    <form style={{ display: "flex" }} className="form" onSubmit={submitData}>
      <input type="text" value={input} onChange={handleChange} />
      {/* <button onClick={() => props.handleSubmit(input)}>Add</button> */}
      <button type="submit">Add</button>
    </form>
  );
}

export default Input;
