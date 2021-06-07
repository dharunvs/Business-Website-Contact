import { Form, Formik } from "formik";
import { FormFieldClass } from "../../components";
import { initialValues, validationSchema } from "./formikConfig";
import "./Contact.css";

function Contact() {
  const contact = () => {};

  return (
    <div className="Contact">
      <div className="contactContainer">
        <div className="information">
          <h1>Address</h1>
          <div className="address">
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
          <div className="phn group">
            <p>+91 9360157929</p>
          </div>
          <div className="email group">
            <p>
              <a href="mailto:vibrantdx@gmail.com">vibrantdx@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="line"></div>
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
