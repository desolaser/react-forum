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
    firebase
      .categories()
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((item) => {
          const value = item.val();
          setCategories((prevCategories) => [
            ...prevCategories,
            {
              id: item.key,
              name: value.name,
              description: value.description,
            },
          ]);
          setLoading(false);
        });
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
        categories.map((category) => (
          <Category key={category.id} category={category} />
        ))
      ) : (
        <CardNote
          title="Error"
          text="There are not categories on this forum, adding a category is recommended. If you can't do so talk with an admin"
          onClick={authExists && onButtonClick}
          buttonText="Add Category"
        />
      )}
    </Container>
  );
};

export default MainPage;
