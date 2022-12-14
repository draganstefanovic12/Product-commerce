import { useState } from "react";
import { changePassword } from "../../../api/userApi";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";

const passwordFields = [
  { name: "oldpw", placeholder: "Old password" },
  { name: "newpw", placeholder: "New password" },
  { name: "confpw", placeholder: "Confirm new password" },
];

const passwordSchema = Yup.object({
  newpw: Yup.string().required().min(6, "Password needs to be longer than 6 characters."),
  confpw: Yup.string().oneOf([Yup.ref("newpw"), null], "Passwords need to match."),
});

const ChangePassword = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = () => {
    setError(null);
    setSuccess(null);
  };

  return (
    <div className="py-5 px-10">
      <h1>Change Password</h1>
      <Formik
        initialValues={{ oldpw: "", newpw: "", confpw: "" }}
        validationSchema={passwordSchema}
        onSubmit={async (values) => {
          const res = await changePassword(values.oldpw, values.newpw).catch((err) =>
            setError(err.response.data)
          );
          res.username && setSuccess("Successfully changed passwords.");
        }}
      >
        {() => (
          <Form onChange={handleChange} className="flex flex-col sm:w-2/4 md:w-1/4">
            {passwordFields.map((field, i) => (
              <Field
                key={i}
                placeholder={field.placeholder}
                type="password"
                name={field.name}
                className="input-field w-full bg-gray-100 mb-2"
              />
            ))}
            <ErrorMessage name="confpw" component="div" className="text-red-400" />
            <p className="text-green-400 font-bold">{success}</p>
            <p className="text-red-400">{error}</p>
            <Button type="submit" className="w-24 self-center">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
