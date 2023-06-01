import NavBar from "../../partials/navbar";
import "./styles.css";
import ViewBoards from "./components/views/user/view-boards";
import { useState } from "react";
import JoinBoards from "./components/views/user/join-boards";
import ModalJoin from "./components/modals/join";
import Management from "./components/views/admin/management";
import Dash from "./components/views/admin/dashboard";

export default function Dashboard() {
  const [view, setView] = useState("view");
  const [showModal, setShowModal] = useState(false);
  const role = localStorage.getItem("role");

  return (
    <>
      <div className="container">
        <div className="container__board board">
          {view === "view" ? (
            role === "admin" ? (
              <Dash />
            ) : (
              <ViewBoards />
            )
          ) : role === "admin" ? (
            <Management view={view} />
          ) : (
            <JoinBoards />
          )}
        </div>
      </div>
      <NavBar setView={setView} />
      <ModalJoin
        title={"Are you sure you want to join this board?"}
        visible={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}
