import Container from "../components/Container";
import ChangeAvatar from "../features/user/components/ChangeAvatar";
import ChangePassword from "../features/user/components/ChangePassword";
import ChangeUsername from "../features/user/components/ChangeUsername";
import HelmetPageTitle from "../components/HelmetPageTitle";

const Settings = () => {
  return (
    <Container>
      <HelmetPageTitle title="Settings" />
      <ChangeUsername />
      <ChangePassword />
      <ChangeAvatar />
    </Container>
  );
};

export default Settings;
