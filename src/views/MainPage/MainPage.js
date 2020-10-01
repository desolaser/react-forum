import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Category from "./Category";
import TitleBar from "../../components/TitleBar";
import { useFirebase } from "../../modules/firebase";
import { useSelector } from "react-redux";

const MainPage = ({ history }) => {
  const firebase = useFirebase();
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
        });
      });
  }, []);

  return (
    <Container>
      {authExists && (
        <TitleBar
          title="Category"
          buttonText="Add category"
          onButtonClick={onButtonClick}
        />
      )}
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </Container>
  );
};

export default MainPage;
