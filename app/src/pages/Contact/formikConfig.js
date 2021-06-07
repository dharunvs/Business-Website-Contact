import * as yup from "yup";

const initialValues = {
  name: "",
  company: "",
  email: "",
  contactNo: "",
  message: "",
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Required")
    .min(3, "Must atleast be 3 characters"),
  company: yup.string().optional("Optional"),
  email: yup.string().required("Required").email("Invalid email"),
  contactNo: yup.string().required("Required"),
  message: yup.string().required("Required"),
});

export { initialValues, validationSchema };
