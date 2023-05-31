import { MdOutlineError } from "react-icons/md";
import "./style.css";

export default function E404() {
  return (
    <div className="container">
      <div className="container__body body">
        <h1 className="body__h1">404</h1>

        <div className="body__message message">
          <MdOutlineError className="message__icon" />

          <p className="message__p">Page not Found</p>
        </div>
      </div>
    </div>
  );
}
