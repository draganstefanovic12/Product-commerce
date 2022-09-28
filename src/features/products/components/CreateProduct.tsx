import { Field, Form, Formik } from "formik";
import Button from "../../../components/Button";

const productForm = [
  { name: "name", placeholder: "Product Name", type: "text" },
  { name: "description", placeholder: "Product description", type: "textarea" },
  { name: "price", placeholder: "Product price", type: "text" },
  { name: "file", placeholder: "Product images", type: "file" },
];

const CreateProduct = () => {
  return (
    <div>
      <Formik
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{
          name: "",
          description: "",
          price: "",
          file: "",
          cond: "",
          trade: "",
        }}
      >
        {() => (
          <Form className="form h-screen absolute right-0 rounded-none">
            <h1>Sell new product</h1>
            {productForm.map((fieldProp) => (
              <Field
                name={fieldProp.name}
                placeholder={fieldProp.placeholder}
                type={fieldProp.type}
                className="input-field"
                multiple="multiple"
              />
            ))}
            <div className="justify-between flex w-80 px-3">
              <label>
                Condition <span className="text-sm">*check the box if new</span>
              </label>
              <Field name="condition" type="checkbox" />
            </div>
            <div className="justify-between flex w-80 px-3">
              <label>Taking trades?</label>
              <Field name="trade" type="checkbox" />
            </div>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProduct;
