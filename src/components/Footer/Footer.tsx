import { useLocation } from "react-router-dom";
import github from "../../assets/images/github-icon.png";

const Footer = () => {
  const handleGithubPage = () => {
    window.open("https://github.com/draganstefanovic12");
  };

  const footer = (
    <div className="w-screen hidden md:flex justify-center items-center h-36 bg-white shadow-2xl mt-10">
      <img
        onClick={handleGithubPage}
        src={github}
        className="h-6 cursor-pointer"
        alt="ico"
      />
    </div>
  );

  const { pathname } = useLocation();

  //footer doesn't appear on login/register/messages pages
  const footerRender =
    pathname.includes("/login") ||
    pathname.includes("/register") ||
    pathname.includes("/messages");

  return !footerRender ? footer : <div></div>;
};

export default Footer;
