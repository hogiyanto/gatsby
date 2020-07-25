import React from "react";

import { getUser } from "../services/auth";

import PageMetadata from "./page-metadata";

const Profile = () => {
  return (
    <>
      <PageMetadata title="Profile" />
      <h1>Your profile</h1>
      <ul>
        <li>Username: {getUser()?.username}</li>
        <li>E-mail: {getUser()?.email}</li>
      </ul>
    </>
  );
};

export default Profile;
