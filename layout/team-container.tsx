import { Team, teams } from "../utils/teams";
import { useState } from "react";
import ScheduleBtn from "../components/schedule-btn";

interface TeamContainerProps {
  children: React.ReactNode;
  team: Team;
}

const TeamContainer = ({ children, team }: TeamContainerProps) => {
  const [showSchedule, setShowSchedule] = useState(false);
  const toggleSchedule = () => {
    setShowSchedule(!showSchedule);
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${team.background.src})`,
        }}
        className="w-full h-full py-24 min-h-screen bg-cover bg-no-repeat bg-fixed bg-left"
      >
        <ScheduleBtn team={team} toggleSchedule={toggleSchedule} />
        <div
          style={{
            display: showSchedule ? "block" : "none",
          }}
        >
          <button
            onClick={toggleSchedule}
            className="w-full h-full bg-black bg-opacity-75 fixed top-0 left-0 z-20"
          >
            <div
              style={{
                backgroundImage: `url(${team.schedule.src})`,
              }}
              className="w-[95%] sm:w-[90%] h-[90%] rotate-0 bg-contain bg-center bg-no-repeat fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default TeamContainer;
