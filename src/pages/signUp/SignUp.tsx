import React from "react";
import { Link } from "react-router-dom";
import CredentialsForm from "../../components/credentialsForm/CredentialsForm";
import Layout from "../../components/layout/Layout";
import classes from "./SignUp.module.scss";
const SignUp: React.FC = () => {
  const signUpSubmitHandler = (values: { email: string; password: string }) => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    fetch("https://wtm-sample-apis.staging.wtmsrv.com/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email: values.email, password: values.password }),
      headers: requestHeaders,
    }).then((res) => console.log(res));
  };
  return (
    <Layout>
      <CredentialsForm
        credentialsFor="Sign up"
        onSubmit={signUpSubmitHandler}
      />
      <Link to="/login" className={classes.link}>
        Or Login -&gt;
      </Link>
    </Layout>
  );
};

export default SignUp;
