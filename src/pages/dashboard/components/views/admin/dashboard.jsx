import { useEffect, useState } from "react";
import api from "../../../../../api";
import Stat from "./card";

import { FaUserAlt, FaFlipboard, FaAlgolia } from "react-icons/fa";

export default function Dashboard() {
  const [stats, setStats] = useState([]);
  const icons = [FaUserAlt, FaFlipboard, FaAlgolia];
  const handleGetStats = () => {
    api
      .get("/users/stats")
      .then((response) => {
        setStats(response.data.stats);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    handleGetStats();
  }, []);

  const colors = ["#128807", "#FF5722", "#9C27B0"];

  return (
    <>
      <div className="stats">
        {stats.map((stat, index) => {
          return (
            <Stat
              key={index}
              title={stat.title}
              Icon={icons[index]}
              color={colors[index]}
              count={stat.stat}
            />
          );
        })}
      </div>
    </>
  );
}
