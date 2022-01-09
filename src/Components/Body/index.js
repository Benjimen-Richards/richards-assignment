import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTimer, setUserTimer } from "../redux/actions";

const MainBody = ({ props }) => {
  const [timer, settimer] = useState(5);
  const [interval, setinterval] = useState();
  const dispatch = useDispatch();
  const setTimerInterval = () => {
    let interval = setInterval(settimerCount, 1000);
    setInterval(interval);
    settimer(5);
  };
  const clearTimer = () => {
    clearInterval(interval);
    dispatch(removeTimer(props.user[0].id, interval));
  };
  const settimerCount = () => {
    settimer((second) => {
      if (second > 0) {
        return (second -= 1);
      } else {
        clearInterval(interval);
      }
    });
  };
  useEffect(() => {
    if (props.user) {
      dispatch(setUserTimer(props.user[0].id, timer, "pending", interval));
    }
  }, [timer]);

  return (
    <div>
      {props.user &&
        props.user.map((user, idx) => (
          <div className="Main-body-ctn">
            <li>
              <label>Name:</label>
              <span>{user.userData.name}</span>
            </li>
            <li>
              <label>Email:</label>
              <span>{user.userData.email}</span>
            </li>
            {user.timer && <span>{user.timer}</span>}
            {user.status === "pending" ? (
              <button className="primary" onClick={() => clearTimer()}>
                Undo
              </button>
            ) : (
              <button
                className="primary secondary"
                onClick={() => setTimerInterval()}
              >
                Delete
              </button>
            )}
          </div>
        ))}
    </div>
  );
};

export default MainBody;
