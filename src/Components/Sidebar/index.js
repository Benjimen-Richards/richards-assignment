import React from "react";
import { Badge, ListGroup } from "react-bootstrap";

const Sidebar = ({ props }) => {
  const filterUser = (idx) => {
    const filteredUser = props.users.users.filter(
      (user) => user.userData.id === idx
    );
    props.selected(filteredUser);
  };
  return (
    <div className="Sidebar-ctn">
      <ul>
        {props.users &&
          props.users.users.map((user, idx) => (
            <div>
              <li onClick={() => filterUser(user.userData.id)} className="sidebar-list">
                {user.userData.name}
                {
                  user.timer && <span>{user.timer}</span>
                }
              </li>

            </div>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;

// <ListItemButton className="sidebar-list" key={idx}>
//   <ListItemText
//     primary={user.userData.name}
//     onClick={() => filterUser(user.userData.id)}
//   />
//   {user.status=='pending' && <span style={{color:'red'}}>{user.timer}</span>}
// </ListItemButton>
