import emailjs from "emailjs-com";
import "./App.css";
import * as React from "react";
import { TextInput } from "./components/inputLabel";
import { SubmitButton } from "./components/button.js";
import { TextArea } from "./components/textarea.js";

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
    <form ref={form} className="App shadow-xl  m-8 bg-[#FDFDFD] rounded-lg">
      <h2 className="text-7xl font-bold text-center mb-10 p-8 text-slate-700">
        Contact Form
      </h2>
      <TextInput lableName="Firstname" name="firstName" placeholder="Max" />
      <TextInput lableName="Lastname" name="lastName" placeholder="Muster" />
      <TextInput
        lableName="E-Mail"
        name="eMail"
        placeholder="default@gmail.com"
      />
      <TextInput lableName="Mobile" name="mobile" placeholder="+41" />
      <TextArea
        fieldName="Comment"
        name="comment"
        placeHolder="Leave a comment ..."
      />
      <SubmitButton buttonName="Submit" onSubmit={sendEmail} />
    </form>
  );
}

export default App;
