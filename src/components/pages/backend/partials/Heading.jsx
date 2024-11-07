import { Settings } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Heading = ({title="", subtitle=""}) => {
  return (
    <header className="p-4 bg-primary ">
      <div className="flex justify-between items-center w-full">
        <div>
          <h4 className="mb-0">{title}</h4>
          <small>{subtitle}</small>
        </div>
        <div className="flex gap-5 items-center">
          <Link to="/admin/settings">
            <Settings />
          </Link>
          <div className="size-10 rounded-full text-white bg-accent grid place-content-center">
            RP
          </div>
        </div>
      </div>
    </header>
  );
};

export default Heading;
