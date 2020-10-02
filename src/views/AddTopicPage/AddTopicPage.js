import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "../../modules/firebase";
import AddTopicForm from "./AddTopicForm";

const AddTopicPage = ({ history, match }) => {
  const firebase = useFirebase();
  const auth = useSelector((store) => store.auth);
  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    firebase
      .topics()
      .push({
        name: data.name,
        description: data.description,
        user: auth.uid,
      })
      .then(() => {
        firebase
          .topics()
          .limitToLast(1)
          .on("child_added", (childSnapshot) => {
            const key = childSnapshot.key;
            firebase.category_topics(match.params.id).set({
              [key]: true,
            });
          });
      })
      .catch(function (error) {
        console.error("Error adding topic: ", error);
      });
    alert("Topic added");
    history.push("/");
  };

  return (
    <AddTopicForm
      data={data}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddTopicPage;
