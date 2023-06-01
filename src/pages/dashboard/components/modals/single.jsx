import PropTypes from "prop-types";

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default function Modal({visible, children}) {
  return (
    <div className={"container " + (visible ? "" : "hidden")}>
      <div className="container__modal modal">
        <div className="modal__content content">
          <div className="content__body body">

            {children}

          </div>
        </div>
      </div>
    </div>
  );
}
