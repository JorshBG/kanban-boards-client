import PropTypes from "prop-types";

Card.propTypes = {
    activity: PropTypes.string,
}

export default function Card({activity}) {
  return (
    <div className="cards__card card">
      <div className="card__header"></div>
      <div className="card__body body">
        <div className="body__name">{activity}</div>
        <div className="body__options options">
          <button className="options__button">Move</button>
          <button className="options__button">Team</button>
        </div>
      </div>
    </div>
  );
}
