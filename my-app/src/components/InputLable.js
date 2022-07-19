import * as React from "react";
export { TextInput };

function TextInput({ lableName }) {
  const [lable, setLable] = React.useState();
  return (
    <div className="form-container">
      <lable className="form-lable">{lableName}</lable>
      <input
        id="1"
        value={lable}
        onChange={(event) => setLable(event.target.value)}
      ></input>
    </div>
  );
}
