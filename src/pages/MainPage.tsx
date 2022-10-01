import heroVid from "../assets/vids/hero.mp4";
import Container from "../components/Container";

const MainPage = () => {
  return (
    <Container>
      <video
        muted
        autoPlay
        width="1600"
        className="-translate-y-10 m-0 sm:mt-5"
      >
        <source type="video/mp4" src={heroVid}></source>
      </video>
    </Container>
  );
};

export default MainPage;
