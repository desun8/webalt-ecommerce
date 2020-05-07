// import Inputmask from "inputmask";
import Form from "./form";

const initForm = () => {
  const forms = Array.from(document.querySelectorAll(".form"));
  const mainForm = document.querySelector("#mainFeedbackForm");


  forms.forEach((form) => new Form(form));
  const initMainForm = () => new Form(mainForm);
  initMainForm();
};

export default initForm;
