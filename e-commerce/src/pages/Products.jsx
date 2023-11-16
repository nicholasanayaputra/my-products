import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "New Shoes",
    price: "Rp 1.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, alias.
    Obcaecati, numquam excepturi, modi temporibus omnis porro dolorum
    cumque laudantium veritatis nulla non maxime. Obcaecati tempore saepe
    commodi mollitia pariatur!`,
  },
  {
    id: 2,
    name: "Old Shoes",
    price: "Rp 500.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, alias.
    `,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
