import { useLocation } from "react-router-dom";
import github from "../../assets/images/github-icon.png";

const Footer = () => {
  const handleGithubPage = () => {
    window.open("https://github.com/draganstefanovic12");
  };

  const { pathname } = useLocation();

  return pathname !== "/messages" ? (
    <div className="w-screen flex justify-center items-center h-36 bg-white shadow-2xl mt-10">
      <img
        onClick={handleGithubPage}
        src={github}
        className="h-6 cursor-pointer"
        alt="ico"
      />
    </div>
  ) : (
    <div></div>
  );
};

export default Footer;
