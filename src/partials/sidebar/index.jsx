// import { GiHamburgerMenu } from "react-icons/gi";
import PropTypes from "prop-types";
import menus from "../../menus";

import "./styles.css";

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setView: PropTypes.func.isRequired,
};

export default function SideBar({ open, setView }) {
  const role = localStorage.getItem("role");

  return (
    <div className={"sidebar " + (open ? "" : "hidden")}>
      <div></div>
      <div className="sidebar__content content">
        {menus.map((menu) => (
          <>
            {role === menu.privilege ? (
              <a
                key={menu.title}
                className="content__a"
                onClick={() => setView(menu.path)}
              >
                {menu.title}
              </a>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </div>
  );
}
