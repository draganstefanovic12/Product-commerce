import { Product } from "../types";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { deleteProduct, editProduct } from "../../../api/productApi";
import Button from "../../../components/Button";
import close from "../../../assets/images/close.svg";

type EditProps = {
  props: Product | undefined;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditProduct = ({ props, setIsEditing }: EditProps) => {
  const { price, name, trade, stock, description, category } = props!;
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteProduct(props?._id);
    navigate("/");
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  return (
    <Formik
      initialValues={{
        price: price,
        name: name,
        trade: trade,
        stock: stock,
        description: description,
        category: category,
      }}
      onSubmit={(values) => {
        editProduct(values, props?._id);
        setIsEditing(false);
      }}
    >
      <Form className="form absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
        <div className="form relative">
          <img
            onClick={handleClose}
            src={close}
            alt="close"
            className="h-3 absolute right-3 top-7 cursor-pointer"
          />
          <h1>Edit product details</h1>
          <label>Product name</label>
          <Field className="input-field" name="name" type="text" />
          <label>Product price</label>
          <Field className="input-field" name="price" type="number" />
          <label>In stock</label>
          <Field className="input-field" name="stock" type="number" />
          <div className="flex items-center justify-between w-72">
            <label>Trading</label>
            <Field name="trade" type="checkbox" />
          </div>
          <div className="flex items-center gap-9 justify-center w-72 child:w-24">
            <Button type="submit">Submit</Button>
            <Button onClick={handleDelete} className="bg-red-500">
              Delete
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default EditProduct;
