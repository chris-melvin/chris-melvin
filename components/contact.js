import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import Button from "./button";

export default function Contact() {
  const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <>
        <label className="text-white text-lg" htmlFor={props.id || props.name}>
          {label}
        </label>
        <input
          className={`text-black text-lg block my-2 p-2  rounded w-full ${
            meta.touched && meta.error ? "drop-shadow-error" : ""
          }`}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className="text-red-600">{meta.error}</div>
        ) : null}
      </>
    );
  };
  const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <>
        <label className="text-white text-lg" htmlFor={props.id || props.name}>
          {label}
        </label>
        <textarea
          rows="5"
          className={`text-black text-lg block my-2 p-2 rounded w-full resize-none  ${
            meta.touched && meta.error ? "drop-shadow-error" : ""
          }`}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className="text-red-600">{meta.error}</div>
        ) : null}
      </>
    );
  };

  return (
    <div className="w-full md:w-1/2">
      <Formik
        initialValues={{
          firstName: "",
          message: "",
          email: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div>
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Name"
            />
          </div>

          <div>
            <MyTextArea
              label="Message"
              name="message"
              type="text"
              placeholder="Message"
            />
          </div>
          <div>
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="email"
            />
          </div>
          <Button className="text-base text-white  rounded-xl bg-secondary  hover:text-gray-400 p-2">
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
