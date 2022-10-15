import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import PageMotion from "../../../components/page-motion";
import TeamContainer from "../../../layout/team-container";
import Topic from "../../../components/topic";
import { teams } from "../../../utils/teams";
import { TeamTopic } from "../../../utils/teams/team-topics";

interface Props {
  children: React.ReactNode;
  team: string;
}

const Team: NextPage<Props> = ({ team }) => {

  return (
    <PageMotion>
      <TeamContainer team={teams[team]}>
        <div className="space-y-3">
          {teams[team].topics.map((topic: TeamTopic) => (
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { team: "front-end" } },
      { params: { team: "game-development" } },
      { params: { team: "web-design" } },
      { params: { team: "infrastructure" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      team: params?.team,
    },
  };
};

export default Team;
