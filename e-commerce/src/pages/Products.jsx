import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="New Shoes">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, alias.
          Obcaecati, numquam excepturi, modi temporibus omnis porro dolorum
          cumque laudantium veritatis nulla non maxime. Obcaecati tempore saepe
          commodi mollitia pariatur!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="New Shoes">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, alias.
          Obcaecati, numquam excepturi, modi temporibus omnis porro dolorum
          cumque laudantium veritatis nulla non maxime. Obcaecati tempore saepe
          commodi mollitia pariatur!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
