import * as React from "react";
export { SubmitButton };

function SubmitButton({ buttonName }) {
  const [button, setButton] = React.useState();
  return <button className="submit-button">{buttonName}</button>;
}
