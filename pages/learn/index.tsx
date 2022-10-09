import type { NextPage } from "next";
import PageMotion from "../../components/page-motion";
import CardContainer from "../../layout/card-container";
import banner from "../../assets/images/backgrounds/banner_BG.png";

const Home: NextPage = () => {
  return (
    <>
      <PageMotion>
        <div
          style={{
            backgroundImage: `url(${banner.src})`,
            minHeight: "100vh",
            height: "100%",
            paddingTop: "4rem",
            paddingBottom: "6rem",
          }}
          className="w-screen bg-cover bg-center bg-no-repeat flex justify-center flex-col"
        >
          <h1 className="text-center text-3xl font-bold mb-5 ">Hello World Fennec - Learn</h1>
            <CardContainer />
          
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div> */}
        </div>
      </PageMotion>
    </>
  );
};

export default Home;
