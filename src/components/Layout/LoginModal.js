import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";
import { useFirebase } from "../../modules/firebase";
import LoginForm from "./LoginForm";

const LoginModal = ({ closeModal }) => {
  const firebase = useFirebase();
  const history = useHistory();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    firebase
      .doSignInWithEmailAndPassword(data.email, data.password)
      .then((authUser) => {
        const id = authUser.user.uid;
        firebase
          .user(id)
          .once("value")
          .then((snapshot) => {
            dispatch(
              login({
                username: snapshot.child("username").val(),
                firstName: snapshot.child("firstName").val(),
                lastName: snapshot.child("lastName").val(),
                email: authUser.user.email,
                age: snapshot.child("age").val(),
                country: snapshot.child("country").val(),
              })
            );
          });
        history.push("/");
        closeModal();
        alert("You are logged in now");
      })
      .catch((error) => setError(error));
  };

  const isInvalid = data.email === "" || data.password === "";

  return (
    <LoginForm
      data={data}
      error={error}
      isInvalid={isInvalid}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginModal;
