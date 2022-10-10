import SIT from "../assets/images/SITKMUTT_Tag.webp";
import Logo from "../assets/images/HelloFennec-logo.png";

const Nav = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-20 z-10"
      >
        <div className="w-[95%] md:w-[90%] max-w-[64rem] h-full m-auto flex justify-between">
          <div
            style={{
              backgroundImage: `url(${SIT.src})`,
            }}
            className="w-[12rem] md:w-[15rem] h-full bg-contain bg-top bg-no-repeat"
          />
          <div
            style={{
              backgroundImage: `url(${Logo.src})`,
            }}
            className="w-[7rem] md:w-[9rem] h-full bg-contain bg-top bg-no-repeat mt-2"
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
