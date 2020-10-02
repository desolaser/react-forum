import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "../../modules/firebase";
import AddPostForm from "./AddPostForm";

const AddPostPage = ({ history, match }) => {
  const firebase = useFirebase();
  const auth = useSelector((store) => store.auth);
  const [data, setData] = useState({
    number: "",
    text: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    firebase
      .posts()
      .push({
        number: data.number,
        text: data.text,
        user: auth.uid,
      })
      .then(() => {
        firebase
          .topics()
          .limitToLast(1)
          .on("child_added", (childSnapshot) => {
            const key = childSnapshot.key;
            firebase.topicPosts(match.params.id).update({
              [key]: true,
            });
          });
      })
      .catch(function (error) {
        console.error("Error adding post: ", error);
      });
    alert("Post added");
    history.push("/posts/" + match.params.id);
  };

  return (
    <AddPostForm
      data={data}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddPostPage;
