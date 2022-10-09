import PageMotion from "../../../components/page-motion";
import TeamContainer from "../../../layout/team-container";
import Topic from "../../../components/topic";
import { teams } from "../../../utils/teams";

const Infrastructure = () => {
  return (
    <PageMotion>
      <TeamContainer team={teams.Infrastructure}>
        <div className="space-y-3">
          {teams.Infrastructure.topics.map((topic) => (
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

export default Infrastructure;
