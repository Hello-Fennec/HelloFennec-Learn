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
          backgroundPosition: "left",
          minHeight: "100vh",
          height: "100%",
          paddingTop: "4rem",
          paddingBottom: "6rem",
        }}
        className="w-full bg-cover bg-center bg-no-repeat bg-fixed "
      >
        <div
          style={{ marginBottom: "1rem" }}
          className="w-[95%] md:w-[90%] max-w-[64rem] m-auto flex justify-between "
        >
          <h1 className={"text-3xl font-bold shadow-lg"}>{team.title}</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            style={{
              background: "#07be72",
              padding: "1rem",
              borderRadius: "1rem",
              fontFamily: "Kanit",
              outline: "1px solid white",
            }}
            onClick={toggleSchedule}
          >
            ตารางเรียน
          </motion.button>
        </div>
        <motion.div
          style={{
            display: showSchedule ? "block" : "none",
          }}
        >
          <button
            style={{
              width: "100vw",
              height: "100vh",
              position: "fixed",
              top: "0",
              left: "0",
              background: "rgba(0,0,0,0.5)",
            }}
            onClick={toggleSchedule}
          ><div
            style={{
              backgroundImage: `url(${team.schedule.src})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              height: "90%",
            }}
          /></button>
        </motion.div>
        {children}
      </div>
    </>
  );
};

export default TeamContainer;
