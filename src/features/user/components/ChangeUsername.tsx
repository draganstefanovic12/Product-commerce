import { useState } from "react";
import { changeUsername } from "../../../api/userApi";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useAuth } from "../../auth/context/AuthContext";

const ChangeUsername = () => {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const { dispatch } = useAuth();

  const usernameSchema = Yup.object({
    username: Yup.string()
      .required()
      .min(3, "Username must be longer than 3 characters.")
      .max(13, "Username can't be longer than 13 characters."),
  });

  return (
    <div className="py-5 px-10">
      <Formik
        validationSchema={usernameSchema}
        onSubmit={async (values) => {
          const response = await changeUsername(values.username).catch((err) => {
            setError(err);
            return;
          });
          setSuccess("Successfully changed username.");
          localStorage.setItem("commUser", JSON.stringify(response));
          dispatch({ type: "LOGIN", payload: response });
        }}
        initialValues={{ username: "" }}
      >
        <Form className="flex flex-col sm:w-2/4 md:w-1/4">
          <h1>Change username</h1>
          <Field
            placeholder="New username"
            name="username"
            className="input-field w-full bg-gray-100 mb-2"
          />
          <ErrorMessage component="div" name="username" className="text-red-400" />
          <p className="text-green-400">{success}</p>
          <p className="text-red-400">{error}</p>
          <Button className="w-24 self-center">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

//finish this today
export default ChangeUsername;
