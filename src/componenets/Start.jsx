import { useRef, useState } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();
  const [error, setError] = useState("");

  const handleClick = () => {
    const value = inputRef.current.value.trim();

    if (value) {
      setUsername(value);
      setError(""); // clear error
    } else {
      setError("Please insert user to start");
    }
  };

  return (
    <>
      <div className="start">
        <input
          className="startInput"
          placeholder="Enter Your Name"
          ref={inputRef}
        />
        <button className="startButton" onClick={handleClick}>
          Start
        </button>
        {error && <p className="errorText">{error}</p>}
      </div>

      <div className="footer">
        <p className="footerText">
          © {new Date().getFullYear()} Dahir Muse. All rights reserved.
        </p>
      </div>
    </>
  );
}

