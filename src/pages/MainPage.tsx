import Container from "../components/Container";
import landingBg from "../assets/images/landing-bg.png";

const MainPage = () => {
  return (
    <>
      <div className="relative">
        <img
          src={landingBg}
          alt="landing-img"
          className="w-screen h-160 object-cover"
        />
        <div className="absolute top-5 left-32 ">
          <h1 className="text-7xl landing animate-fade">Product Commerce</h1>
          <p className="text-2xl animate-fade">buy, sell and trade</p>
        </div>
      </div>
      <Container>
        <div></div>
      </Container>
    </>
  );
};

export default MainPage;
