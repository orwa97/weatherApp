import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CredentialsForm from "../../components/credentialsForm/CredentialsForm";
import Layout from "../../components/layout/Layout";
import { AuthContext } from "../../store/auth-context";
import classes from "./SignUp.module.scss";
const SignUp: React.FC = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const signUpSubmitHandler = (values: { email: string; password: string }) => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    fetch("https://wtm-sample-apis.staging.wtmsrv.com/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email: values.email, password: values.password }),
      headers: requestHeaders,
    }).then((res) => {
      if (res.ok) {
        ctx.updateIsLoggedIn(true);
        navigate("/user");
      }
      res.json().then((res) => ctx.updateUserToken(res.access_token));
    });
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
