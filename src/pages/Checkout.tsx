import { useCart } from "../features/shopping cart/context/ShoppingCartContext";
import { Field, Form, Formik } from "formik";
import Button from "../components/Button";
import Container from "../components/Container";
import HelmetPageTitle from "../components/HelmetPageTitle";
import ShoppingCartProductBox from "../features/shopping cart/components/ShoppingCartProduxtBox";

const Checkout = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (price, product) => price + parseInt(product.product!.price) * product.count,
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
    <Container className="flex flex-col md:flex-row h-screen gap-20">
      <HelmetPageTitle title="Checkout" />
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
            //simulating product purchase
          }}
        >
          <Form className="form w-2/4 flex flex-col md:flex-row justify-items-start px-5 mt-20 shadow-none">
            <div>
              <h1 className="text-3xl border-bottom">Details</h1>
              <div className="py-10">
                <h1 className="border-bottom border-gray-200">Billing Information</h1>
                {formFieldsBilling.map((field, i) => (
                  <div key={i} className="flex flex-col w-96">
                    <label>{field.label}</label>
                    <Field name={field.name} className="input-field" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex flex-col w-96">
                  <h1 className="border-bottom border-gray-200">Shipping Information</h1>
                  {formFieldsShipping.map((field, i) => (
                    <div key={i} className="flex flex-col w-96">
                      <label>{field.label}</label>
                      <Field name={field.name} className="input-field" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="flex w-full flex-col gap-5 mt-28 md:mt-20 px-5 md:px-0 content-center justify-items-center pr-5">
        <h1 className="text-3xl border-bottom">Cart</h1>
        {cart.map((product, i) => (
          <ShoppingCartProductBox key={i} prop={product} className="none" />
        ))}
        <div>
          <p className="border-bottom w-80">Total:</p>
          <p className="font-bold text-2xl">{totalPrice}$</p>
        </div>
        <Button>Checkout</Button>
      </div>
    </Container>
  );
};

export default Checkout;
