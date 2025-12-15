import { useEffect, useRef } from "react";

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="btn-1 cursor-pointer max-sm:w-full">
      {children}
    </button>
  );
}

export default Button;
