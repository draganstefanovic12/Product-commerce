import Container from "../components/Container";
import landingBg from "../assets/images/landing-bg.png";
import NewProducts from "../features/main page/NewProducts";
import HelmetPageTitle from "../components/HelmetPageTitle";
import MainPageCategory from "../features/main page/MainPageCategory";

const MainPage = () => {
  return (
    <>
      <HelmetPageTitle title="Product Commerce" />
      <div className="relative">
        <img
          src={landingBg}
          alt="landing-img"
          className="w-screen h-160 object-cover"
        />
        <div className="absolute top-5 left-5 md:left-32 select-none">
          <h1 className="sm:text-xs md:text-7xl landing animate-fade text-dark">
            Product Commerce
          </h1>
          <p className="sm:text-sm md:text-2xl animate-fade text-dark">
            buy, sell and trade
          </p>
        </div>
      </div>
      <Container className="mt-6 h-auto p-1 flex flex-col gap-7 rounded">
        <NewProducts />
      </Container>
      <Container className="mt-6 h-128 md:h-72 p-1 flex flex-col gap-7 rounded">
        <MainPageCategory category="Electronics" />
      </Container>
      <Container className="mt-6 h-128 md:h-72 p-1 flex flex-col gap-7 rounded">
        <MainPageCategory category="Books" />
      </Container>
      <Container className="mt-6 h-128 md:h-72 p-3 flex flex-col gap-7 rounded">
        <MainPageCategory category="Clothing" />
      </Container>
      <Container className="mt-6 h-128 md:h-72 p-3 flex flex-col gap-7 rounded">
        <MainPageCategory category="Instruments" />
      </Container>
    </>
  );
};

export default MainPage;
