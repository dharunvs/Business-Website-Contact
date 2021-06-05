import { useState } from "react";
import { Formik, Form } from "formik";
import fb from "../../services/firebase";
import { initialValues, validationSchema } from "./formikConfig";
import { FormFieldClass } from "../../components";
import "./Login.css";

function Login() {
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
      <Formik
        onSubmit={login}
        validateOnMount={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <h1>Admin Login</h1>

            <p className="admin">Admin</p>
            <FormFieldClass.FormField
              label="Password"
              name="password"
              type="password"
            />

            <button
              className="loginButton"
              disabled={isSubmitting || !isValid}
              type="submit"
            >
              Log in
            </button>
            <div className="serverErrorContainer">
              <FormFieldClass.ServerError serverError={serverError} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
