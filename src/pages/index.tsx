import React from "react";
import { navigate } from "gatsby";

import Header from "../components/header";
import Layout from "../components/layout";
import PageMetadata from "../components/page-metadata";
import { handleLogin, isLoggedIn } from "../services/auth";

const Home = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const result = handleLogin({ username, password });
    if (result) {
      navigate(`/app/profile`);
    }
  };

  if (isLoggedIn()) {
    navigate(`/app/profile`);
  }

  return (
    <>
      <PageMetadata title="Login" />
      <Layout>
        <Header text="Login" />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username: john" onChange={(event) => setUsername(event.target.value)} />
          <input type="password" placeholder="Password: pass" onChange={(event) => setPassword(event.target.value)} />
          <button type="submit">Login</button>
        </form>
        <p>HTTP server host: {process.env.HTTP_SERVER_HOST}</p>
      </Layout>
    </>
  );
};

export default Home;
