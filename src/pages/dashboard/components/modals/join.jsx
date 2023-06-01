import PropTypes from "prop-types";
import api from "../../../../api";
import Single from "./single";

ModalJoin.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  idBoard: PropTypes.string.isRequired,
  handleBoards: PropTypes.func.isRequired,
};

export default function ModalJoin({
  title,
  visible,
  setShowModal,
  idBoard,
  handleBoards,
}) {
  const handleClose = () => {
    setShowModal(!visible);
  };

  const handleJoin = () => {
    api
      .post("/join/board", {
        user_id: localStorage.getItem("userId"),
        board_id: idBoard,
      })
      .then((res) => {
        alert("Joined");
        console.log(res);
      })
      .catch((error) => {
        alert("Error to join");
        console.log(error);
      })
      .finally(() => {
        handleClose();
        handleBoards();
      });
  };

  return (
    <>
      <Single visible={visible} >
        <div className="body__title title">
          <h1 className="title__h1">{title}</h1>
        </div>
        <div className="body__options options">
          <button className="options__button cancel" onClick={handleClose}>
            Cancel
          </button>
          <button className="options__button confirm" onClick={handleJoin}>
            Confirm
          </button>
        </div>
      </Single>
    </>
  );
}
