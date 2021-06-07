import { Field, ErrorMessage } from "formik";

export function FormField({
  name,
  label,
  type = "text",
  autoComplete = "off",
  rows = "1",
}) {
  return (
    <label>
      <Field
        className="formField"
        type={type}
        name={name}
        placeholder={label}
        autoComplete={autoComplete}
        rows={rows}
      />
      <div className="errorContainer">
        <ErrorMessage className="error" component="p" name={name} />
      </div>
    </label>
  );
}

export function FormTextArea({
  name,
  label,
  autoComplete = "off",
  rows = "1",
}) {
  return (
    <label>
      <Field
        className="formTextArea"
        name={name}
        placeholder={label}
        autoComplete={autoComplete}
        component="textarea"
        rows={rows}
      />
      <div className="errorContainer">
        <ErrorMessage className="error" component="p" name={name} />
      </div>
    </label>
  );
}

export function ServerError({ serverError }) {
  return <div className="error">{serverError}</div>;
}
