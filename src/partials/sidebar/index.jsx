// import { GiHamburgerMenu } from "react-icons/gi";
import PropTypes from "prop-types";
import menus from "../../menus";

import "./styles.css";

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default function SideBar({ open }) {

  const privilege = localStorage.getItem("privilege");

  return (
    <div className={"sidebar " + (open ? "" : "hidden")}>
      <div></div>
      <div className="sidebar__content content">
        {menus.map((menu) => (
          <a href={menu.path} hidden={privilege === "user" && menu.privilege === "admin"} key={menu.title} className="content__a">
            {menu.title}
          </a>
        ))}
      </div>
    </div>
  );
}
