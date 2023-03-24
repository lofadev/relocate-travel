import React from "react";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <div className="empty">
      <Link to="/" className="empty-goback">
        Go back
      </Link>
      <h1 className="empty-heading">
        <span>This</span> <span>page</span> <span>is</span> <span>being</span> <span>updated</span>
      </h1>
    </div>
  );
};

export default Empty;
