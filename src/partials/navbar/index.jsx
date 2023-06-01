import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import SideBar from "../sidebar";
import "./styles.css";
import PropTypes from "prop-types";

NavBar.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default function NavBar({ setView }) {
  const [opened, setOpened] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar__content content">
          <div className="content__username username">
            <p className="username__p">{localStorage.getItem("name") + ' ' + localStorage.getItem("last_name")}</p>
          </div>
          <div className="content__profile profile">
            <CgProfile className="profile__icon" onClick={() => setShowOptions(!showOptions)} />
            <div className={"profile__menus menus " + (showOptions ? "" : "hidden")} >
              {/* <p className="menus__p">{localStorage.getItem("name")}</p> */}
              <button className="menus__button" onClick={handleLogout}>Logout</button>
            </div>
          </div>
          <GiHamburgerMenu
            className="content__sidebar icon"
            onClick={() => setOpened(!opened)}
          />
        </div>
      </div>
      <SideBar open={opened} setView={setView} />
    </>
  );
}
