import Container from "../components/Container";
import ChangeAvatar from "../features/user/components/ChangeAvatar";
import ChangePassword from "../features/user/components/ChangePassword";
import ChangeUsername from "../features/user/components/ChangeUsername";

const Settings = () => {
  return (
    <Container>
      <ChangeUsername />
      <ChangePassword />
      <ChangeAvatar />
    </Container>
  );
};

export default Settings;
