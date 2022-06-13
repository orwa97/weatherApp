import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CredentialsForm from "../../components/credentialsForm/CredentialsForm";
import Layout from "../../components/layout/Layout";
import { AuthContext } from "../../store/auth-context";
import classes from "./LogIn.module.scss";
const LogIn: React.FC = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const loginSubmitHandler = (values: { email: string; password: string }) => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    fetch("https://wtm-sample-apis.staging.wtmsrv.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
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
      <CredentialsForm credentialsFor="login" onSubmit={loginSubmitHandler} />
      <Link to="/sign-up" className={classes.link}>
        Or Sign up -&gt;
      </Link>
    </Layout>
  );
};

export default LogIn;
