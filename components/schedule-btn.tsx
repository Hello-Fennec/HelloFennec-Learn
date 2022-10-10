import { motion } from "framer-motion";
import TableIcon from "../assets/images/tablet.png";
import { Team } from "../utils/teams";

interface ScheduleBtnProps {
  team: Team;
  toggleSchedule: () => void;
}

const ScheduleBtn = ({ team, toggleSchedule }: ScheduleBtnProps) => {
  return (
    <div className="w-[95%] md:w-[90%] max-w-[64rem] m-auto flex justify-between  mb-4">
      <h1 className="text-3xl font-bold drop-shadow-xl">{team.title}</h1>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={toggleSchedule}
        className="bg-[#0dcc93] p-4 rounded-2xl fontfamily-kanit  flex"
      >
        <div
          style={{
            backgroundImage: `url(${TableIcon.src})`,
          }}
          className="w-4 h-4 text-white mr-2 bg-contain bg-no-repeat m-auto"
        ></div>
        ตารางเรียน
      </motion.button>
    </div>
  );
};

export default ScheduleBtn;
