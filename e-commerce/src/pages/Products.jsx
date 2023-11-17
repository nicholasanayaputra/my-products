import { Fragment, useEffect, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "New Shoes",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, alias.
    Obcaecati, numquam excepturi, modi temporibus omnis porro dolorum
    cumque laudantium veritatis nulla non maxime. Obcaecati tempore saepe
    commodi mollitia pariatur!`,
  },
  {
    id: 2,
    name: "Old Shoes",
    price: 500000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, alias.
    `,
  },
  {
    id: 3,
    name: "Old Skull",
    price: 2000000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, alias.adipisicing elit. Odio, alias
    `,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart([{ id: 1, qty: 1 }]);
  }, []);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id);
      return acc + product.price * item.qty;
    }, 0);
    setTotalPrice(sum);
  }, [cart]);
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-6 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                handleAddToCart={handleAddToCart}
                id={product.id}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
