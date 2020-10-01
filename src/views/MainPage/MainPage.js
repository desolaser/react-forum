import React from "react";
import Container from "@material-ui/core/Container";
import Category from "./Category";
import TitleBar from "./TitleBar";

const MainPage = () => {
  return (
    <Container>
      <TitleBar />
      <Category />
      <Category />
      <Category />
    </Container>
  );
};

export default MainPage;
