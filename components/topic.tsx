import { TeamTopic } from "../utils/teams/team-topics";
import { motion } from "framer-motion";
import slideIcon from "../assets/images/googleslideicon.png";
import gitbookIcon from "../assets/images/gitbookicon.png";

const Topic = ({ title, date, slide, gitbook }: TeamTopic) => {
  return (
    <div className="w-[95%] md:w-[90%] max-w-[64rem] h-auto min-h-[7rem] bg-white rounded-3xl text-black m-auto p-5 flex flex-col justify-center">
      <div className="flex flex-col sm:flex-row justify-between ">
        <div className="mb-2">
          <h1 className="text-xl">{title}</h1>
          <p className="text-gray-500">{date}</p>
        </div>
        <div className="grid grid-cols-2 sm:flex space-x-2 h-14 sm:h-20 w-full sm:w-1/2 justify-end">
          <LinkButton url={slide} title="Slide" color="#ffd048" />
          <LinkButton url={gitbook} title="GitBook" color="#346ddb" />
        </div>
      </div>
    </div>
  );
};

const LinkButton = ({ url, title, color }: any) => {
  return (
    <motion.a whileHover={{ scale: 1.05 }} href={url} target="_blank">
      <div
        style={{ background: color }}
        className="w-full sm:w-36 h-full rounded-xl text-white text-xl font-bold flex items-center justify-center p-1"
      >
        <div
          style={{
            backgroundImage: `url(${
              title === "Slide" ? slideIcon.src : gitbookIcon.src
            }`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "1.8rem",
            height: "1.8rem",
            marginRight: "0.5rem",
          }}
        ></div>
        {title}
      </div>
    </motion.a>
  );
};

export default Topic;
