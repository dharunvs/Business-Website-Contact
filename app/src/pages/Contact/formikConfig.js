import * as yup from "yup";

const initialValues = {
  name: "",
  company: "",
  email: "",
  contactNo: "",
  message: "",
};

const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  company: yup.string().optional("Optional"),
  email: yup.string().required("Required"),
  contactNo: yup.string().required("Required"),
  message: yup.string().required("Required"),
});

export { initialValues, validationSchema };
