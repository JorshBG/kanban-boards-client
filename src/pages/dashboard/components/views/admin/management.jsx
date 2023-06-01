import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaUserAlt, FaFlipboard, FaAlgolia } from "react-icons/fa";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Record from "../../record";
import api from "../../../../../api";

Management.propTypes = {
  view: PropTypes.string.isRequired,
};

export default function Management({ view }) {
  const icons = [FaUserAlt, FaFlipboard, FaAlgolia];
  const [records, setRecords] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    api
      .get(
        `/${view}/list${
          view === "activities" ? "/" + localStorage.getItem("board_id") : ""
        }`
      )
      .then((res) => {
        setRecords(res.data.data);
      });
  }, [view, reload]);

  return (
    <>
      <div className="manager">
        <div className="manager__header header">
          <input
            type="search"
            placeholder="Search..."
            className="header__input--search"
          />
          <label htmlFor="addon" className="header__label">
            Create{" "}
            {view === "activities"
              ? "activity"
              : view === "boards"
              ? "board"
              : "user"}
          </label>
          <IoAddCircleSharp className="header__icon" />
        </div>
        <div className="manager__body">
          {records.map((record, index) => {
            return (
                <>
                <Record
                  key={'record-'+index}
                  content={record.name}
                  IconLeft={
                    view === "users"
                      ? icons[0]
                      : view === "boards"
                      ? icons[1]
                      : icons[2]
                  }
                  IconEdit={AiFillEdit}
                  IconDelete={AiFillDelete}
                  id={record.id}    
                  view={view}
                  setReload={setReload}
                />
              </>
            );
          

          })}
        </div>
      </div>
    </>
  );
}
