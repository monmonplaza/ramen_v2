import React from "react";

const ModalWrapper = (props) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center z-50`}
    >
      <div className="backdrop absolute top-0 left-0 h-full w-full bg-black bg-opacity-80 animate-fade "></div>
      {props.children}
    </div>
  );
};

export default ModalWrapper;
