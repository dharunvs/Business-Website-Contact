import { Form, Formik } from "formik";
import fb from "../../services/fb";
import { FormFieldClass } from "../../components";
import { initialValues, validationSchema } from "./formikConfig";
import { Symbols } from "../../components";
import "./Contact.css";
import { useEffect, useState } from "react";

function Contact() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    fb.firestore
      .collection("Root")
      .doc("AdditionalData")
      .get()
      .then((doc) => {
        setNum(doc.data().Number);
      });
  }, []);

  const contact = (
    { name, company, email, contactNo, message },
    { setSubmitting }
  ) => {
    fb.firestore
      .collection("Messages")
      .doc(`Message${num}`)
      .set({
        MessageID: `Message${num}`,
        name: name,
        company: company,
        email: email,
        contactNo: contactNo,
        message: message,
      })
      .then(() => {
        setNum(num + 1);
        fb.firestore
          .collection("Root")
          .doc("AdditionalData")
          .update({
            Number: num + 1,
          });
        window.location.reload();
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="Contact">
      <div className="contactContainer">
        <div className="info">
          <h1>Address</h1>

          <div className="infoContainer">
            <div className="group">
              <Symbols.Location size="24" />
              <p>
                3A-Kumaran street,
                <br />
                Balambigai Flats,
                <br />
                Keelkattalai,
                <br />
                Chennai - 600 117
              </p>
            </div>
            <div className="group">
              <Symbols.Phone size="24" />
              <p>+91 9360157929</p>
            </div>
            <div className="group">
              <Symbols.Mail size="24" />
              <p>
                <a href="mailto:vibrantdx@gmail.com">vibrantdx@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="line"></div> */}
        <Formik
          validateOnMount={true}
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={contact}
        >
          {({ isValid, isSubmitting }) => (
            <Form>
              <h1>Feel free to contact us</h1>
              <div>
                <FormFieldClass.FormField label="Name" name="name" />
                <FormFieldClass.FormField label="Company" name="company" />
              </div>
              <div>
                <FormFieldClass.FormField
                  label="Email"
                  name="email"
                  type="email"
                />
                <FormFieldClass.FormField
                  label="Contact No"
                  name="contactNo"
                  type="tel"
                />
              </div>
              <div>
                <FormFieldClass.FormTextArea
                  label="Message"
                  name="message"
                  component="textarea"
                  rows="3"
                />
              </div>

              <div>
                <button
                  className="submitButton"
                  disabled={isSubmitting || !isValid}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Contact;
