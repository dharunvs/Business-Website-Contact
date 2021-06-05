import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import fb from "../../services/firebase";
import { initialValues, validationSchema } from "./formikConfig";
import { FormFieldClass } from "../../components";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [serverError, setServerError] = useState("");

  const login = ({ password }, { setSubmitting }) => {
    fb.auth
      .signInWithEmailAndPassword("dharunsivakumar002@gmail.com", password)
      .then((res) => {
        if (!res.user) {
          setServerError("Trouble logging in.");
        }
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          setServerError("Invalid credentials");
        } else if (err.code === "auth/user-not-found") {
          setServerError("Email not registered");
        } else {
          setServerError("Something went wrong");
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="Login">
      <h2 className="logo auth-logo">Forms</h2>
      <div className="auth-form-wrapper">
        <div className="auth-form-container">
          <h1>Log in</h1>
          <Formik
            onSubmit={login}
            validateOnMount={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ isValid, isSubmitting }) => (
              <Form>
                <p>Admin</p>
                <FormFieldClass.FormField
                  label="Password"
                  name="password"
                  type="password"
                />

                <button
                  className="auth-button"
                  disabled={isSubmitting || !isValid}
                  type="submit"
                >
                  Log in
                </button>
              </Form>
            )}
          </Formik>
          <FormFieldClass.ServerError serverError={serverError} />
        </div>
      </div>
    </div>
  );
}

export default Login;
