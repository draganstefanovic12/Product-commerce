import { Field, Form, Formik } from "formik";
import Button from "../../../components/Button";
import categories from "../categories";

type SellProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

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

const SellProduct = () => {
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

export default SellProduct;
