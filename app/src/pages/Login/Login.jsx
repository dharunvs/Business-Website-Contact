import { useState } from "react";
import { useHistory } from "react-router";
import { Formik, Form } from "formik";
import fb from "../../services/fb";
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
        history.push("admin");
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
            <p className="resetPassword">Forgot/Reset password ?</p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
