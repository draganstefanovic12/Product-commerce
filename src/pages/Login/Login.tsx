import { login } from "../../api/backendApi";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";

const loginSchema = Yup.object({
  username: Yup.string().required("Username is required."),
  password: Yup.string().required("Password is required."),
});

const Login = () => {
  //Using state to handle server side errors
  const [error, setError] = useState();

  return (
    <div className="h-screen grid place-items-center">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await login({
            username: values.username,
            password: values.password,
          }).catch((e) => setError(e.response.data.message));
        }}
      >
        {(err) => (
          <Form className="w-1/5 h-1/2 rounded-lg grid gap-2 content-center justify-items-center shadow">
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
