import { FaRegCopy } from "react-icons/fa6";
import Button from "./Button";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

function ExtraDesign() {
  const [copied, setCopied] = useState(false);

  function handleClicked() {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }
  return (
    <div className="w-fit">
      <Button>
        <span className="text-[12px] opacity-[0.8]">Try it:</span>
        <span className="text-[12px]">npm oxTimmy</span>
        {copied ? (
          <IoMdCheckmark className="text-[12px]" />
        ) : (
          <FaRegCopy
            className="text-[12px] opacity-[0.8] z-[99999]"
            onClick={handleClicked}
          />
        )}
      </Button>
    </div>
  );
}

export default ExtraDesign;
