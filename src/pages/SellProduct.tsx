import { useState } from "react";
import { createProduct } from "../api/productApi";
import { Field, Form, Formik } from "formik";
import Button from "../components/Button";
import categories from "../features/products/categories";

const initialValues = {
  name: "",
  description: "",
  price: "",
  cond: false,
  trade: false,
  stock: "",
  category: "",
};

const productForm = [
  { name: "name", placeholder: "Product Name", type: "text" },
  { name: "description", placeholder: "Product description", type: "textarea" },
  { name: "price", placeholder: "Product price (USD)", type: "number" },
  { name: "stock", placeholder: "In stock", type: "number" },
];

const SellProduct = () => {
  const [category, setCategory] = useState("Electronics");
  const [uploadImages, setUploadImages] = useState<FileList | null>();

  return (
    <div className="flex w-4/4 justify-center relative bg-gray-50">
      <Formik
        onSubmit={(values) => {
          createProduct(uploadImages, { ...values, category: category });
        }}
        initialValues={initialValues}
      >
        {() => (
          <Form className="h-screen w-full md:w-2/4 flex flex-col rounded-none shadow relative px-10 bg-white">
            <h1 className="mt-5">Sell new product</h1>
            {productForm.map((fieldProp, i) => (
              <Field
                key={i}
                name={fieldProp.name}
                placeholder={fieldProp.placeholder}
                type={fieldProp.type}
                className="input-field my-5 w-full"
                component={fieldProp.type === "textarea" && "textarea"}
              />
            ))}
            <input
              type="file"
              className="input-field w-full my-5"
              accept="image/*"
              onChange={(e) => setUploadImages(e.currentTarget.files)}
              multiple
            />
            <div className="md:flex md:justify-between">
              <div className="flex flex-col gap-3">
                <div className="justify-between flex w-72 px-3">
                  <label>Category</label>
                  <select onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((category, i) => (
                      <option key={i} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
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
