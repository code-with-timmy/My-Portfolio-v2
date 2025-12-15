import { useEffect, useRef } from "react";

function Button({ children }) {
  return (
    <button className="btn-1 cursor-pointer max-sm:w-full">{children}</button>
  );
}

export default Button;
