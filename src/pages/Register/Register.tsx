import { useRegister } from "../../hooks/useRegister";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import FormOptions from "../../components/FormOptions/FormOptions";

const signUpSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
  email: Yup.string().required(),
});

const Register = () => {
  const { register, error } = useRegister();

  return (
    <div className="h-screen grid place-items-center bg-pattern">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          register(values);
        }}
      >
        {() => (
          <Form className="form h-3/5">
            <label>Username</label>
            <Field type="text" name="username" className="input-field" />
            <ErrorMessage name="username" />
            <label>Email</label>
            <Field type="email" name="email" className="input-field" />
            <ErrorMessage name="email" />
            <label>Password</label>
            <Field type="password" name="password" className="input-field" />
            <label>Repeat Password</label>
            <Field type="password" name="confirm" className="input-field" />
            <ErrorMessage name="password" />
            <Button className="mt-5" type="submit">
              Submit
            </Button>
            <p>{error}</p>
            <FormOptions navigateTo="login" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
