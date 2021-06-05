import * as yup from "yup";

const initialValues = {
  password: "",
};

const validationSchema = yup.object().shape({
  password: yup.string().required("Required"),
});

export { initialValues, validationSchema };
