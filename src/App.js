import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import { setLoading, setUser } from "./Pages/userSlice/userSlice";
import "./tailwind.css";

const App = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUser({ user: user }));
          // ...
        } else {
          dispatch(setUser({ user: {} }));
        }
        dispatch(setLoading({ loading: false }));
      }),
    [auth]
  );
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
