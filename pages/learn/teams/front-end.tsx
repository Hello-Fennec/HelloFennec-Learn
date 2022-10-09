import PageMotion from "../../../components/page-motion";
import TeamContainer from "../../../layout/team-container";
import Topic from "../../../components/topic";
import { teams } from "../../../utils/teams";

const FrontEnd = () => {
return (
    <PageMotion >
      <TeamContainer team={teams.FrontEnd}>
        <div className="space-y-3">
          {teams.FrontEnd.topics.map((topic) => (
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

export default FrontEnd;
