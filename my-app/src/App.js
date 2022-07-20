import emailjs from "emailjs-com";
import "./App.css";
import * as React from "react";
import { TextInput } from "./components/InputLabel";
import { SubmitButton } from "./components/button.js";

function App() {
  const form = React.useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "Cb1seSfNB3Lbp7kTW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...!", error);
        }
      );
    form.current.reset();
  }

  return (
    <form ref={form} className="App">
      <h2 className="text-7xl font-bold text-center mt-10 mb-20 text-slate-400">
        Contact Form
      </h2>
      <TextInput lableName="Firstname" name="firstName" />
      <TextInput lableName="Lastname" name="lastName" />
      <TextInput lableName="E-Mail" name="eMail" type="email" />
      <TextInput lableName="Mobile" name="mobile" />

      <SubmitButton buttonName="Submit" onSubmit={sendEmail} />
    </form>
  );
}

export default App;
