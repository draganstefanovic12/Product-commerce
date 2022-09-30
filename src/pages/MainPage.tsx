import heroVid from "../assets/vids/hero.mp4";

const MainPage = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="container">
        <video
          muted
          src={heroVid}
          autoPlay
          width="1500"
          className="-translate-y-10"
        />
      </div>
    </div>
  );
};

export default MainPage;
