import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./userSlice.js";
export default function User() {
  const Dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <div style={{backgroundColor:"orange"}}>
      {!user.isLoggedIn ? (
        <button onClick={() => Dispatch(login("John"))}>Login</button>
      ) : (
        <>
          {user.name}
          <button onClick={() => Dispatch(logout())}>Logout</button>
        </>
      )}
    </div>
  );
}
