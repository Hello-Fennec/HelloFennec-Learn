import { Team, teams } from "../utils/teams";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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
        <div className="w-[95%] md:w-[90%] max-w-[64rem] m-auto flex justify-between  mb-4">
          <h1 className="text-3xl font-bold drop-shadow-xl">{team.title}</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={toggleSchedule}
            className="bg-[#0dcc93] p-4 rounded-2xl fontfamily-kanit outline-white outline outline-1"
          >
            ตารางเรียน
          </motion.button>
        </div>
        <motion.div
          style={{
            display: showSchedule ? "block" : "none",
          }}
        >
          <motion.button
            onClick={toggleSchedule}
            className="w-full h-full bg-black bg-opacity-75 fixed top-0 left-0 z-20"
          >
            <div
              style={{
                backgroundImage: `url(${team.schedule.src})`,
              }}
              className="w-[95%] sm:w-[90%] h-[90%] rotate-0 bg-contain bg-center bg-no-repeat fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </motion.button>
        </motion.div>
        {children}
      </div>
    </>
  );
};

export default TeamContainer;
