import PropTypes from "prop-types";
import Card from "./card";

Cards.propTypes = {
  states: PropTypes.array,
  activities: PropTypes.array,
  boardId: PropTypes.number
};

export default function Cards({ states, activities}) {
  return (
    <>
      {states.map((element, index) => (
        <>
          <div key={index + 0} className="cards__column column">
            {activities.map((activity) => (
              <>
                {activity.state == element ? (
                  <Card key={activity.id} activity={activity.activity} />
                ) : (
                  ""
                )}
              </>
            ))}
          </div>
        </>
      ))}
    </>
  );
}
