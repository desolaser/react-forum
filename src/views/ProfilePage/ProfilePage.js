import React, { useState } from "react";
import { useFirebase } from "../../modules/firebase";
import { useSelector } from "react-redux";
import ProfileDisplay from "./ProfileDisplay";

const ProfilePage = () => {
  const auth = useSelector((store) => store.auth);
  const firebase = useFirebase();
  const [data, setData] = useState({
    username: auth.username,
    firstName: auth.firstName,
    lastName: auth.lastName,
    email: auth.email,
    age: auth.age,
    country: auth.country,
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  const isInvalid =
    data.username === "" ||
    data.firstName === "" ||
    data.lastName === "" ||
    data.email === "" ||
    data.age === "" ||
    data.country === "";

  return (
    <ProfileDisplay
      auth={auth}
      data={data}
      isInvalid={isInvalid}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default ProfilePage;
