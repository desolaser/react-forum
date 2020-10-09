import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  confirmPasswordReset = (code, password) =>
    this.auth.confirmPasswordReset(code, password);

  // *** User API ***
  user = (uid) => this.db.ref(`/users/${uid}`);

  users = () => this.db.ref(`/users`);

  // *** Category API ***
  category = (id) => this.db.ref(`/categories/${id}`);
  categoryTopics = (id) => this.db.ref(`/categories/${id}/topics`);

  categories = () => this.db.ref(`/categories`);
  categoriesWithTopics = async (callback) => {
    this.categories()
      .once("value")
      .then(async (snapshot) => {
        let dataCategories = snapshot.val();
        let toWait = [];
        Object.keys(dataCategories).forEach((category_id) => {
          let topics = [];
          dataCategories[category_id].id = category_id;
          if (dataCategories[category_id].topics !== undefined) {
            Object.keys(dataCategories[category_id].topics).forEach((topic) => {
              const method = this.topic(topic)
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
          }
        });
        await Promise.all(toWait);
        return dataCategories;
      })
      .then(callback);
  };

  // *** Topic API ***
  topic = (id) => this.db.ref(`/topics/${id}`);
  topicWithPosts = async (id, callback) => {
    this.topic(id)
      .once("value")
      .then(async (snapshot) => {
        const topic = snapshot.val();
        topic.id = snapshot.key;
        if (topic.posts === undefined) return topic;
        const toWait = [];
        const posts = [];
        Object.keys(topic.posts).forEach((post) => {
          const method = this.post(post)
            .once("value")
            .then(async (snapshot) => {
              const post = snapshot.val();
              post.id = snapshot.key;
              await this.user(post.user)
                .once("value")
                .then((snapshot) => {
                  const user = snapshot.val();
                  user.id = snapshot.key;
                  post.user = user;
                });
              posts.push(post);
            });
          toWait.push(method);
        });
        topic.posts = posts;
        await Promise.all(toWait);
        return topic;
      })
      .then(callback);
  };

  topics = () => this.db.ref(`/topics`);
  topicPosts = (id) => this.db.ref(`/topics/${id}/posts`);

  // *** Post API ***
  post = (id) => this.db.ref(`/posts/${id}`);
  postWithComments = async (id, callback) => {
    this.post(id)
      .once("value")
      .then(async (snapshot) => {
        const post = snapshot.val();
        post.id = snapshot.key;
        if (post.comments === undefined) return post;
        const toWait = [];
        const comments = [];
        Object.keys(post.comments).forEach((comment) => {
          const method = this.post(comment)
            .once("value")
            .then((snapshot) => {
              const comment = snapshot.val();
              comment.id = snapshot.key;
              comments.push(comment);
            });
          toWait.push(method);
        });
        const user_method = this.user(post.user)
          .once("value")
          .then((snapshot) => {
            const user = snapshot.val();
            user.id = snapshot.key;
            post.user = user;
          });
        toWait.push(user_method);
        post.comments = comments;
        await Promise.all(toWait);
        return post;
      })
      .then(callback);
  };

  posts = () => this.db.ref(`/posts`);

  // *** Comments API ***
  comment = (id) => this.db.ref(`/comments/${id}`);
  commentWithUser = (id, callback) => {
    this.comment(id)
      .once("value")
      .then(async (snapshot) => {
        const comment = snapshot.val();
        comment.id = snapshot.key;
        this.user(comment.user)
          .once("value")
          .then((snapshot) => {
            const user = snapshot.val();
            comment.user = user;
          });
      })
      .then(callback);
  };

  comments = () => this.db.ref(`/comments`);
}

export default Firebase;
