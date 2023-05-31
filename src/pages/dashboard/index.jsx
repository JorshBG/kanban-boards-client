import { useEffect, useState } from "react";
import api from "../../api";
import NavBar from "../../partials/navbar";
import "./styles.css";
import header_colors from "./colors";
// import styled from "styled-components";

export default function Dashboard() {
  const [boards, setBoards] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    api
      .get("/boards/list-by-user/" + localStorage.getItem("userId"))
      .then((res) => {
        setBoards(res.data.boards);
      });
  }, []);

  if (boards.length !== 0) {
    localStorage.setItem("board_id", boards[0].id);
  }

  useEffect(() => {
    api
      .get("/activities/list/" + localStorage.getItem("board_id"))
      .then((res) => {
        setActivities(res.data.activities);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="container__board board">
          <div className="board__header header">
            <div className="header__selector selector">
              <label htmlFor="board__selector" className="selector__label">
                You can select your board &nbsp;&nbsp;
              </label>
              <select name="" id="board__selector" className="selector__select">
                {boards.map((board) => (
                  <option key={board.id} value={board.id}>
                    {board.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="board__body body">
            <div className="body__head head">
              {header_colors.map((element, index) => (
                <div
                  key={index}
                  className="head__header header"
                  style={{ backgroundColor: `#${element.color}` }}
                >
                  <p className="header__p">{element.title}</p>
                </div>
              ))}
            </div>
            <div className="body__cards cards">
              {activities.map((activity) => (
                <div key={activity.id} className="cards__card card">
                  <div className="card__header"></div>
                  <div className="card__body body">
                    <div className="body__name">{activity.activity}</div>
                    <div className="body__options options">
                      <button className="options__button">Edit</button>
                      <button className="options__button">Edit</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <NavBar />
    </>
  );
}
