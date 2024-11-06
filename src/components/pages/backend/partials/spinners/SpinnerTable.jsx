import React from "react";
import Spinner from "./Spinner";

const SpinnerTable = ({ css = "stroke-accent " }) => {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-[999] flex justify-center items-center flex-col text-center bg-primary bg-opacity-90 w-full h-full">
      <div className="absolute z-50">
        <Spinner diameter="w-[40px]" css={css} />
      </div>
    </div>
  );
};

export default SpinnerTable;