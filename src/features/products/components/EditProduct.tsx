import { Product } from "../types";
import { Field, Form, Formik } from "formik";
import Button from "../../../components/Button";

type EditProps = {
  product: Product | undefined;
};

const EditProduct = (props: EditProps) => {
  const { price, name, trade, stock } = props.product!;

  return (
    <Formik
      initialValues={{
        price: price,
        name: name,
        trade: trade,
        stock: stock,
      }}
      onSubmit={(values) => {}}
    >
      <Form className="form absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
        <h1>Edit product details</h1>
        <label>Product name</label>
        <Field className="input-field" name="name" type="text" />
        <label>Product price</label>
        <Field className="input-field" name="price" type="number" />
        <label>In stock</label>
        <Field className="input-field" name="stock" type="number" />
        <label>Open for trade?</label>
        <Field className="input-field" name="trade" type="checkmark" />
        <Button>Submit</Button>
      </Form>
    </Formik>
  );
};

export default EditProduct;
