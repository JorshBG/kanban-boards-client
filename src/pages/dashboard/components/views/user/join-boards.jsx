import { useEffect, useState } from "react";
import api from "../../../../../api";
import ModalJoin from "../../modals/join";

export default function JoinBoards() {
  const [boards, setBoards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [idBoard, setIdBoard] = useState('');

  useEffect(() => {
    handleBoards();
  }, []);

  const handleModal = (e) => {
    setShowModal(!showModal);
    setIdBoard(e.target.id);
  }

  const handleBoards = () => {
    api.get("/boards/list-by-non-user/" + localStorage.getItem("userId")).then((res) => {
      setBoards(res.data.boards);
    }). catch((err) => {
      console.log(err);
    
    });
  }

  return (
    <>
      <div className="content">
        <div className="content__header header">
          <h1 className="header__h1">You can select whatever board you want!</h1>
        </div>
        <div className="content__cards cards">
          {boards.map((board) => (
            <div className="cards__card card" key={board.id}>
              <div className="card__header"></div>
              <div className="card__body body">
                <div className="body__name">{board.name}</div>
                <div className="body__options options">
                  <button className="options__button" id={board.id} onClick={handleModal}>Join</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalJoin title={'Are you sure you want to join this board?'} visible={showModal} setShowModal={setShowModal} idBoard={idBoard} handleBoards={handleBoards} />
    </>
  );
}
