import { useRef, useEffect } from "react";

function FocusInput() {
  const InputRef = useRef(null);

  const ValueRef = useRef("");

  const InputDivRef = useRef(null);
  const handleInputClick = () => {
    InputDivRef.current.style.backgroundColor = "lightblue";
  };

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  const handleClick = () => {
    InputRef.current.focus();
  };
  const handleKeyUp = () => {
    ValueRef.current = InputRef.current.value;
  };
  return (
    <div
      ref={InputDivRef}
      onClick={handleInputClick}
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        marginBottom: "10px",
      }}
    >
      <input type="text" ref={InputRef} onKeyUp={handleKeyUp} />
      <p>Uncontrolled Input Value: {ValueRef.current}</p>
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
