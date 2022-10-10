import { Field, Form, Formik } from "formik";
import Container from "../components/Container";
import { useCart } from "../features/shopping cart/context/ShoppingCartContext";

const Checkout = () => {
  const { cart } = useCart();

  //name
  //address
  //phone number
  //email

  const initialValues = {
    name: "",
    address: "",
    number: "",
    email: "",
  };
  return (
    <Container>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            //simulating product purchase
          }}
        >
          <Form className="form justify-items-start p-5 shadow-none">
            <label>Name</label>
            <Field name="name" className="input-field" />
            <label>Address</label>
            <Field name="address" className="input-field" />
            <label>Number</label>
            <Field name="number" className="input-field" />
            <label>Email</label>
            <Field name="email" className="input-field" />
          </Form>
        </Formik>
      </div>
    </Container>
  );
};

export default Checkout;
