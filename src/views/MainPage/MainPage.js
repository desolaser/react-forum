import React from "react";
import Container from "@material-ui/core/Container";
import Category from "./Category";
import TitleBar from "../../components/TitleBar";
import { useSelector } from "react-redux";

const MainPage = () => {
  const auth = useSelector((store) => store.auth);
  const authExists =
    Object.keys(auth).length !== 0 && auth.constructor === Object;

  const onButtonClick = () => {
    console.log("asd");
  };

  return (
    <Container>
      {authExists && (
        <TitleBar
          title="Category"
          buttonText="Add category"
          onButtonClick={onButtonClick}
        />
      )}
      <Category />
      <Category />
      <Category />
    </Container>
  );
};

export default MainPage;
