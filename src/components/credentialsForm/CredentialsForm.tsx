import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import Button from "../button/Button";
import classes from "./CredentialsForm.module.scss";
import { Link } from "react-router-dom";

type SubmittedValues = {
  email: string;
  password: string;
};

type Props = {
  credentialsFor: string;
  onSubmit(values: SubmittedValues): void;
};

const CredentialsForm: React.FC<Props> = ({ credentialsFor, onSubmit }) => {
  return (
    <>
      <h2 className={classes.header}>{credentialsFor}</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onSubmit(values);
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required - use a valid email"),
          password: Yup.string()
            .required("No password provided")
            .min(8, "Password is too short - must be 8 chars at least"),
        })}
      >
        <Form className={classes.form}>
          <div className={classes.field}>
            <Field
              name="email"
              type="text"
              placeholder="Email"
              className={classes.input}
            ></Field>
            <p className={classes.error}>
              <ErrorMessage name="email" />
            </p>
          </div>
          <div className={classes.field}>
            <Field
              name="password"
              type="text"
              placeholder="Password"
              className={classes.input}
            ></Field>
            <p className={classes.error}>
              <ErrorMessage name="password" />
            </p>
          </div>

          <Button type="submit" name={credentialsFor} />
        </Form>
      </Formik>
    </>
  );
};

export default CredentialsForm;
