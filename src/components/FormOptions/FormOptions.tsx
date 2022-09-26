import { useNavigate } from "react-router-dom";

type FormProps = {
  navigateTo: string;
};

const FormOptions = ({ navigateTo }: FormProps) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  //Conditionally rendering selection at the bottom of the form
  //to avoid clutter on register/login pages
  const login = (
    <p>
      Not a user?
      <span
        onClick={handleRegister}
        className="hover:cursor-pointer pl-1 hover:underline"
      >
        Register here.
      </span>
    </p>
  );

  const register = (
    <p>
      Already a member?
      <span
        onClick={handleLogin}
        className="hover:cursor-pointer pl-1 hover:underline"
      >
        Login.
      </span>
    </p>
  );
  const selection = navigateTo === "register" ? login : register;

  return (
    <div className="child:text-sm absolute bottom-5">
      <p className="hover:cursor-pointer pl-1 hover:underline">
        Forgot your password?
      </p>
      {selection}
    </div>
  );
};

export default FormOptions;
