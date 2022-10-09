import { useState } from "react";
import Card from "../components/card";
import { teamsArr } from "../utils/teams";

const CardContainer = () => {
  const [onHover, setOnHover] = useState(-1);
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
   m-auto sm:w-[31rem] lg:w-[62rem] "
    >
      {teamsArr.map((team, index) => (
        <Card
          setOnHover={setOnHover}
          onHover={onHover}
          index={index}
          key={team.title}
          name={team.title}
          image={team.thumbnail}
          path={team.path}
        />
      ))}
    </div>
  );
};

export default CardContainer;
