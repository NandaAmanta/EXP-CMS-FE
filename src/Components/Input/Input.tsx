import React from "react";

function Input(props) {
  return (
    <>
      <input
       type={props.type}
       id={props.id}
       name={props.name}
       className={props.className}
       required
      />
    </>
  );
}

export default Input;
