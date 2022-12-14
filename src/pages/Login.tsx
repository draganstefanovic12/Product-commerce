import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import useLogin from "../features/auth/hooks/useLogin";
import FormOptions from "../components/Form/FormOptions";
import HelmetPageTitle from "../components/HelmetPageTitle";

const loginSchema = Yup.object({
  username: Yup.string().required("Username is required."),
  password: Yup.string().required("Password is required."),
});

const Login = () => {
  const { login, error } = useLogin();

  return (
    <div className="messages-height grid place-items-center bg-pattern">
      <HelmetPageTitle title="Login" />
      <Formik
        initialValues={{ username: "", password: "" }}
        validateOnChange={true}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          login(values);
        }}
      >
        {() => (
          <Form className="form">
            <label>Username</label>
            <Field type="text" name="username" className="input-field" />
            <ErrorMessage name="username" component="div" />
            <label>Password</label>
            <Field type="password" name="password" className="input-field" />
            <ErrorMessage name="password" component="div" />
            <p className="text-red-500">{error}</p>
            <Button type="submit" className="mt-5">
              Submit
            </Button>
            <FormOptions navigateTo="register" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
