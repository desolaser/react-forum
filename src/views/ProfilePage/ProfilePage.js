import React, { useState } from "react";
import { useFirebase } from "../../modules/firebase";
import { useDispatch, useSelector } from "react-redux";
import ProfileDisplay from "./ProfileDisplay";
import { login } from "../../redux/actions";

const ProfilePage = () => {
  const auth = useSelector((store) => store.auth);
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
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

  const handleSubmit = () => {
    const userData = {
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      age: data.age,
      country: data.country,
    };
    firebase.user(auth.uid).set(userData, (error) => setError(error));
    dispatch(login(userData));
    alert("User updated");
  };

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
      error={error}
      isInvalid={isInvalid}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default ProfilePage;
