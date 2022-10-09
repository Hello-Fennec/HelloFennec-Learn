import PageMotion from "../../../components/page-motion";
import TeamContainer from "../../../layout/team-container";
import Topic from "../../../components/topic";
import { teams } from "../../../utils/teams";

const GameDevelopment = () => {
  return (
    <PageMotion>
      <TeamContainer team={teams.GameDevelopment}>
        <div className="space-y-3">
          {teams.GameDevelopment.topics.map((topic) => (
            <Topic
              key={topic.title}
              title={topic.title}
              date={topic.date}
              slide={topic.slide}
              gitbook={topic.gitbook}
            />
          ))}
        </div>
      </TeamContainer>
    </PageMotion>
  );
};

export default GameDevelopment;
