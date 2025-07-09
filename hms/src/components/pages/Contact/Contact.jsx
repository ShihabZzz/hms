import Navbar from "../../shared/Navbar/Navbar";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}

export default Contact;