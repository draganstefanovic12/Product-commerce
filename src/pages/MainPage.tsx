import Container from "../components/Container";
import landingBg from "../assets/images/landing-bg.png";
import NewProducts from "../features/main page/NewProducts";
import MainPageCategory from "../features/main page/MainPageCategory";

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
      <Container className="mt-6 h-auto p-3 flex flex-col gap-7 rounded">
        <NewProducts />
      </Container>

      <Container className="mt-6 h-auto p-3 flex flex-col gap-7 rounded">
        <MainPageCategory category="Electronics" />
      </Container>
      <Container className="mt-6 h-auto p-3 flex flex-col gap-7 rounded">
        <MainPageCategory category="Books" />
      </Container>
    </>
  );
};

export default MainPage;
