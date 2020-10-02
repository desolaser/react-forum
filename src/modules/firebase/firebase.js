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
  category_topics = (id) => this.db.ref(`/categories/${id}/topics`);

  categories = () => this.db.ref(`/categories`);

  // *** Topic API ***
  topic = (id) => this.db.ref(`/topics/${id}`);

  topics = () => this.db.ref(`/topics`);

  // *** Post API ***
  post = (id) => this.db.ref(`/posts/${id}`);

  posts = () => this.db.ref(`/posts`);

  // *** Comments API ***
  comment = (id) => this.db.ref(`/comments/${id}`);

  comments = () => this.db.ref(`/comments`);
}

export default Firebase;
