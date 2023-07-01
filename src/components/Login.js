import React from "react";
import "./Login.css";
import { auth } from "../firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        console.log(userAuth);
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profile,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profile,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2011.png"
        alt=""
      />
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name(required if registering)"
        />
        <input
          type="text"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          placeholder="Profile pic URL (optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="Email"
          placeholder="Email"
        />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a Member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
