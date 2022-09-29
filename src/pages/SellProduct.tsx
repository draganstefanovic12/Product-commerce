import { Field, Form, Formik } from "formik";
import Button from "../components/Button";
import categories from "../features/products/categories";

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
  { name: "price", placeholder: "Product price (USD)", type: "number" },
  { name: "stock", placeholder: "In stock", type: "number" },
  { name: "file", placeholder: "Product images", type: "file" },
];

const SellProduct = () => {
  return (
    <div className="flex w-full justify-center relative">
      <Formik
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={initialValues}
      >
        {() => (
          <Form className="h-screen w-full md:w-2/4 flex flex-col rounded-none shadow relative px-10">
            <h1 className="mt-5">Sell new product</h1>
            {productForm.map((fieldProp, i) => (
              <Field
                key={i}
                name={fieldProp.name}
                placeholder={fieldProp.placeholder}
                type={fieldProp.type}
                className="input-field my-5 w-full"
                component={fieldProp.type === "textarea" && "textarea"}
                multiple="multiple"
              />
            ))}
            <div className="md:flex md:justify-between">
              <div className="flex flex-col gap-3">
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
                  <label>Accepting returns:</label>
                  <Field name="trade" type="checkbox" />
                </div>
              </div>
              <Button className="h-10 self-end sm:mt-5 md:mt-0" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SellProduct;
