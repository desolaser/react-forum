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
    const getCategories = async () => {
      firebase
        .categories()
        .once("value")
        .then(async (snapshot) => {
          let dataCategories = snapshot.val();
          let toWait = [];
          Object.keys(dataCategories).forEach((category_id) => {
            let topics = [];
            Object.keys(dataCategories[category_id].topics).forEach((topic) => {
              const method = firebase
                .topic(topic)
                .once("value")
                .then((snapshot) => {
                  const value = snapshot.val();
                  const topic = {
                    id: snapshot.key,
                    name: value.name,
                    description: value.description,
                    user: value.user,
                  };
                  topics.push(topic);
                });
              toWait.push(method);
            });
            dataCategories[category_id].topics = topics;
          });
          await Promise.all(toWait);
          return dataCategories;
        })
        .then((dataCategories) => {
          setCategories(dataCategories);
          setLoading(false);
        });
    };

    getCategories();
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
