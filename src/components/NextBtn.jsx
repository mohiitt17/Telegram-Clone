import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../store/MyContext";

const LoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { checkNumber, setValue } = useContext(MyContext);
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      checkNumber();
      setValue("");
    }, 1000);
  };

  return (
    <button
      className="btn btn-primary"
      type="button"
      id="next-btn"
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading ? (
        <>
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
          <span role="status" className="ms-2">
            Loading...
          </span>
        </>
      ) : (
        "Next"
      )}
    </button>
  );
};

export default LoadingButton;