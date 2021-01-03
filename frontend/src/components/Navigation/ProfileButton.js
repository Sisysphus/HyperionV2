import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="logout-wrapper">
      <p className="welcome">Welcome {user.username}!</p>
      <button className="log-in-button" onClick={logout}>
        Log Out
      </button>
    </div>
  );
}

// return (
//     <>
//       <button onClick={openMenu} className="log-in-button">
//         <i className="fas fa-user-circle" />
//       </button>
//       {showMenu && (
//         <ul className="profile-dropdown">
//           <li>{user.username}</li>
//           <li>{user.email}</li>
//           <li>
//             <button onClick={logout}>Log Out</button>
//           </li>
//         </ul>
//       )}
//     </>
//   );
// }

export default ProfileButton;
