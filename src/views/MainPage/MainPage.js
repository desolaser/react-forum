import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { useFirebase } from "../../modules/firebase";
import { useSelector } from "react-redux";

import Category from "./Category";
import TitleBar from "../../components/TitleBar";
import CardNote from "../../components/CardNote";

const MainPage = ({ history }) => {
  const firebase = useFirebase();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const auth = useSelector((store) => store.auth);
  const authExists =
    Object.keys(auth).length !== 0 && auth.constructor === Object;

  const onButtonClick = () => {
    history.push("/add-category");
  };

  useEffect(() => {
    firebase.categoriesWithTopics((data) => {
      console.log(data);
      setCategories(data);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <TitleBar
        title="Categories"
        buttonText="Add category"
        onButtonClick={authExists && onButtonClick}
      />
      {loading ? (
        <CardNote
          title="Loading"
          text="Data is loading, please wait a second"
        />
      ) : categories.length !== 0 ? (
        Object.keys(categories).map((cid) => (
          <Category key={cid} category={categories[cid]} />
        ))
      ) : (
        <CardNote
          title="No categories"
          text="There are not categories on this forum, adding a category is recommended. If you can't do so talk with an admin"
          onClick={authExists && onButtonClick}
          buttonText="Add Category"
        />
      )}
    </Container>
  );
};

export default MainPage;
