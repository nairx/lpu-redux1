import { useState } from "react";
import { store } from "./store.js";
import { Provider } from "react-redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import User from "./User.jsx";
import User1 from "./User1.jsx";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <User />
      <User1 />
    </Provider>
  );
}

export default App;
