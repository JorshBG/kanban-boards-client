import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import SideBar from "../sidebar";
import styled from "styled-components";
import "./styles.css";




export default function NavBar() {
  const [opened, setOpened] = useState(false);

  const Icon = styled.div`

  grid-column: ${opened ? "3":"1"};

  `;

  return (
    <>
      <div className="navbar">
        <div className="navbar__content content">
          <Icon>
            <GiHamburgerMenu className="content__sidebar icon" onClick={() => setOpened(!opened)}/>

          </Icon>

          <CgProfile className="content__profile icon" />
        </div>
      </div>
      <SideBar open={opened} />
    </>
  );
}
