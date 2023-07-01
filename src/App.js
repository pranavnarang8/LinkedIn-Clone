import React, { useEffect } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";
import Widget from "./components/Widget";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
