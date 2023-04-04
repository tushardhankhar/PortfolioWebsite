import React from "react";
import "./ContactForm.css";
import { useFormik } from "formik";

export default function ContactForm() {
  function validate(values) {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!values.email.match(validRegex)) {
      errors.email = "Invalid Email Address";
    }
    return errors;
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form id="formContainer" onSubmit={formik.handleSubmit}>
      <div id="heading">Get In Touch</div>
      <div className="errorContainer">
        <input
          placeholder="Full Name"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name ? (
          <div className="errorMessage">{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <div className="errorMessage">{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          type="text"
          name="message"
          value={formik.values.message}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.message && formik.touched.message ? (
          <div className="errorMessage">{formik.errors.message}</div>
        ) : null}
      </div>
      <button type="submit">Say Hello</button>
    </form>
  );
}
