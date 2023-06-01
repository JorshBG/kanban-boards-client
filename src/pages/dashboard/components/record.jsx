import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ModalFormUser from "./modals/updateUser";
import ModalFormBoard from "./modals/updateBoard";
import api from "../../../api";

Record.propTypes = {
  IconLeft: PropTypes.element,
  content: PropTypes.string.isRequired,
  IconEdit: PropTypes.element,
  IconDelete: PropTypes.element,
  id: PropTypes.number.isRequired,
  view: PropTypes.string.isRequired,
  setReload: PropTypes.func.isRequired
};

export default function Record({
  IconLeft,
  content,
  IconEdit = null,
  IconDelete = null,
  id,
  view,
  setReload
}) {
  const [visible, setVisible] = useState(false);

  const handleDelete = () => {
    api
      .delete(`/${view}/delete/${id}`)
      .then((res) => {
        console.log(res);
        alert('Item Deleted');
      })    
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setVisible(false);
      });
  };
  useEffect(() => {
    console.log('reloaded');
    setReload(visible);
  }, [visible]);
  return (
    <>
      <div className="record" id={id}>
        {IconLeft ? <IconLeft className="record__icon" /> : null}
        <p className="record__p">{content}</p>
        {IconEdit ? (
          <IconEdit
            className="record__icon"
            onClick={() => setVisible(!visible)}
          />
        ) : null}
        {IconDelete ? (
          <IconDelete className="record__icon" onClick={handleDelete} />
        ) : null}
      </div>

      {view === "users" ? (
        <ModalFormUser visible={visible} setVisible={setVisible} user_id={id} />
      ) : (
        <ModalFormBoard
          visible={visible}
          setVisible={setVisible}
          board_id={id}
        />
      )}
    </>
  );
}
