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
      setError("Please Enter Your Name to Start the Quiz.");

      // Auto-hide error after 3 seconds
      setTimeout(() => {
        setError("");
      }, 3000); // 3000 ms = 3 seconds
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