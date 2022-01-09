import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "../src/Components/redux/actions";
import MainBody from "./Components/Body";
import Sidebar from "./Components/Sidebar";
import "./index.css";
const Mainrouter = () => {
  const [selectedUser, setselectedUser] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state);
  return (
    <div className="Main-ctn">
      <h1>Users Assignment</h1>
      <div className="button-ctn">
        <button className="primary" onClick={() => dispatch(getusers())}>Fetch User Data</button>
      </div>
      <div className="app-body">
        <Sidebar
          props={{
            selected: (value) => setselectedUser(value),
            users: userData,
          }}
        />

        <MainBody props={{ user: selectedUser ,userData}} />
      </div>
    </div>
  );
};

export default Mainrouter;
