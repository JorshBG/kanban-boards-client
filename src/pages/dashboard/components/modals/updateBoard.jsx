import { useState } from 'react';
import Single from "./single";
import PropTypes from "prop-types";
import BoardForm from "../../../../components/forms/board";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import api from "../../../../api";

ModalFormBoard.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  board_id: PropTypes.number.isRequired,
};

export default function ModalFormBoard({ visible, setVisible, board_id }) {
    const [board, setBoard] = useState({});
    useEffect(() => {
        api
            .get('/boards/get/' + board_id)
            .then(response => {
                setBoard(response.data.data);
            })
    }, [board_id]);

  return (
    <Single visible={visible}>
      <AiOutlineClose onClick={() => setVisible(!visible)}/>
      <BoardForm title="Register new board" setVisible={setVisible} flag={true} board={board} board_id={board_id} />
    </Single>
  );
}
