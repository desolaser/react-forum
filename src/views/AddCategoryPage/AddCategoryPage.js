import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "../../modules/firebase";
import AddCategoryForm from "./AddCategoryForm";

const AddCategoryPage = ({ history }) => {
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
    firebase.categories().push({
      name: data.name,
      description: data.description,
      user: auth,
    });
    alert("Category added");
    history.push("/");
  };

  return (
    <AddCategoryForm
      data={data}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddCategoryPage;
