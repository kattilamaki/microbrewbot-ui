import React from "react";

const RequestsLeft = (props) => {
    if (props.message) {
        return (
            <div className="alert alert-warning" role="alert">
          {props.message}
        </div>
          );
    } else {
        return <p></p>
    }
};

export default RequestsLeft;
