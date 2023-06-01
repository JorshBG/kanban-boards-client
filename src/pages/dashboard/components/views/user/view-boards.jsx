import { useEffect, useState } from "react";
import api from "../../../../../api";
import header_colors from "../../../colors";
import Cards from "../../group";

export default function ViewBoards() {
  const [boards, setBoards] = useState([]);
  const [activities, setActivities] = useState([]);
  const states = ["TODO", "WORKING", "REVIEW", "DONE"];

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

  const getActivities = () => {
    api
      .get("/activities/list/" + localStorage.getItem("board_id"))
      .then((res) => {
        setActivities(res.data.activities);
      });
  };

  useEffect(() => {
    getActivities();
  }, []);

  const boardChange = (e) => {
    localStorage.setItem("board_id", e.target.value);
    getActivities();
  };

  if(boards.length === 0) {
    return (
      <>
        <div>Wating...</div>
      </>
    );
  }
  return (
    <>
      <div className="board__header header">
          <div className="header__selector selector">
            <label htmlFor="board__selector" className="selector__label">
              You can select your board &nbsp;&nbsp;
            </label>
            <select
              name=""
              id="board__selector"
              className="selector__select"
              onChange={boardChange}
            >
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
            <Cards
              states={states}
              activities={activities}
              boardId={localStorage.getItem("board_id")}
            />
          </div>
        </div>
    </>
  );
}
