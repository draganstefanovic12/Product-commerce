import Container from "../components/Container";
import { useCart } from "../features/shopping cart/context/ShoppingCartContext";
import { Field, Form, Formik } from "formik";
import ShoppingCartProductBox from "../features/shopping cart/components/ShoppingCartProduxtBox";

const Checkout = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (price, product) =>
      price + parseInt(product.product!.price) * product.count,
    0
  );

  //shipping and billing values
  const initialValues = {
    nameB: "",
    addressB: "",
    numberB: "",
    emailB: "",
    nameS: "",
    addressS: "",
    numberS: "",
    emailS: "",
  };

  const formFieldsBilling = [
    { name: "nameB", label: "Name" },
    { name: "addressB", label: "Address" },
    { name: "numberB", label: "Number" },
    { name: "emailB", label: "Email" },
  ];

  const formFieldsShipping = [
    { name: "nameS", label: "Name" },
    { name: "addressS", label: "Address" },
    { name: "numberS", label: "Number" },
    { name: "emailS", label: "Email" },
  ];

  return (
    <Container className="flex gap-20">
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            //simulating product purchase
          }}
        >
          <Form className="form w-2/4 flex justify-items-start p-5 mt-20 shadow-none">
            <div>
              <h1>Billing Information</h1>
              {formFieldsBilling.map((field) => (
                <div className="flex flex-col w-96">
                  <label>{field.label}</label>
                  <Field name={field.name} className="input-field" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex flex-col w-96">
                <h1>Shipping Information</h1>
                {formFieldsBilling.map((field) => (
                  <div className="flex flex-col w-96">
                    <label>{field.label}</label>
                    <Field name={field.name} className="input-field" />
                  </div>
                ))}
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="flex w-full flex-col gap-5 mt-20 content-center justify-items-center pr-5">
        {cart.map((product, i) => (
          <ShoppingCartProductBox key={i} prop={product} className="none" />
        ))}
        <div>
          <p className="border-b-2 border-gray-700 border-solid">Total:</p>
          <p className="font-bold text-2xl">{totalPrice}$</p>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
