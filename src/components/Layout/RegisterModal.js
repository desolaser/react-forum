import React, { useState } from "react";
import { useFirebase } from "../../modules/firebase";
import RegisterForm from "./RegisterForm";

const RegisterModal = ({ closeModal }) => {
  const firebase = useFirebase();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    country: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    firebase
      .doCreateUserWithEmailAndPassword(data.email, data.password)
      .then((authUser) => {
        firebase.user(authUser.user.uid).set({
          username: data.username,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          age: data.age,
          country: data.country,
        });
        alert("You have been registered successfully, try to log in");
        closeModal();
      })
      .catch((error) => setError(error));
  };

  const isInvalid =
    data.username === "" ||
    data.firstName === "" ||
    data.lastName === "" ||
    data.email === "" ||
    data.age === "" ||
    data.country === "" ||
    data.password === "" ||
    data.password !== data.repeatPassword;

  return (
    <RegisterForm
      data={data}
      error={error}
      isInvalid={isInvalid}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default RegisterModal;
