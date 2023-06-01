import PropTypes from "prop-types";

Stat.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.element,
  color: PropTypes.string,
  count: PropTypes.number.isRequired,
};

export default function Stat({ title, Icon, color, count }) {
  return (
    <div className="stat" style={{ border: `1px solid ${color}` }}>
      <div className="stat__div" style={{ backgroundColor: color }}></div>
      <div className="stat__title title">
        <p className="title__p">
          {title}:&nbsp;{count}
        </p>
        <Icon className="title__icon" style={{ color: color }} />
      </div>
    </div>
  );
}
