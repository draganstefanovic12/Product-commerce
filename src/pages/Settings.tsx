import Container from "../components/Container";
import ChangePassword from "../features/user/components/ChangePassword";
import ChangeUsername from "../features/user/components/ChangeUsername";

const Settings = () => {
  return (
    <Container>
      <ChangeUsername />
      <ChangePassword />
    </Container>
  );
};

export default Settings;
