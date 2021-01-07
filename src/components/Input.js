import React, { useEffect, useRef, useState } from "react";

function Input(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitData = (e) => {
    // avoid reloading
    e.preventDefault();
    if (input === "") {
      alert("Please enter todo");
      return;
    }
    props.handleSubmit(input);
    setInput("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form style={{ display: "flex" }} className="form" onSubmit={submitData}>
      <input type="text" ref={inputRef} value={input} onChange={handleChange} />
      {/* <button onClick={() => props.handleSubmit(input)}>Add</button> */}
      <button type="submit">Add</button>
    </form>
  );
}

export default Input;
