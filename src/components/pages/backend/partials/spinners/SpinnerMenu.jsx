import React from "react";
import Spinner from "./Spinner";

const SpinnerMenu = ({ css = "stroke-accent " }) => {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-[999] flex justify-center items-center flex-col text-center w-full h-full">
      <div className="absolute z-50">
        <Spinner diameter="w-[70px]" css={css} />
      </div>
    </div>
  );
};

export default SpinnerMenu;