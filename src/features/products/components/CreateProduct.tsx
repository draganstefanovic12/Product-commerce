import { Field, Form, Formik } from "formik";
import close from "../../../assets/images/close.svg";
import Button from "../../../components/Button";
import categories from "../categories";

const initialValues = {
  name: "",
  description: "",
  price: "",
  file: "",
  cond: "",
  trade: "",
  stock: "",
  category: "",
};

const productForm = [
  { name: "name", placeholder: "Product Name", type: "text" },
  { name: "description", placeholder: "Product description", type: "textarea" },
  { name: "price", placeholder: "Product price", type: "text" },
  { name: "stock", placeholder: "In stock", type: "number" },
  { name: "file", placeholder: "Product images", type: "file" },
];

const CreateProduct = () => {
  return (
    <div>
      <Formik
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={initialValues}
      >
        {() => (
          <Form className="form h-screen w-full md:w-max md:absolute md:right-0 rounded-none">
            <img
              src={close}
              alt="close"
              className="h-3 absolute top-3 right-3 cursor-pointer"
            />
            <h1>Sell new product</h1>
            {productForm.map((fieldProp, i) => (
              <Field
                key={i}
                name={fieldProp.name}
                placeholder={fieldProp.placeholder}
                type={fieldProp.type}
                className="input-field"
                component={fieldProp.type === "textarea" && "textarea"}
                multiple="multiple"
              />
            ))}
            <div className="justify-between flex w-72 px-3">
              <label>Category</label>
              <Field name="category" type="select" values={categories} />
            </div>
            <div className="justify-between flex w-72 px-3">
              <label>
                Condition:
                <span className="text-sm pl-1">*check the box if new</span>
              </label>
              <Field name="condition" type="checkbox" />
            </div>
            <div className="justify-between flex w-72 px-3">
              <label>Taking trades:</label>
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
