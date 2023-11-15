import Button from "../components/Elements/Button"

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
            <a href="#">
                <img src="/images/shoes-1.jpg" alt="product" className="p-8 rounded-t-lg"/>
            </a>
            <div className="px-5 pb-5">
                <a href="">
                    <h5 className="text-xl font-semibold tracking-tight text-white">New Shoes</h5>
                    <p className="text-sm text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, alias. Obcaecati, numquam excepturi, modi temporibus omnis porro dolorum cumque laudantium veritatis nulla non maxime. Obcaecati tempore saepe commodi mollitia pariatur!</p>
                </a>
            </div>
            <div className="flex items-center justify-between px-5 pb-5">
                <span className="text-xl font-bold text-white">Rp 1.000.000</span>
                <Button className="bg-blue-600">Add To Cart</Button>
            </div>
        </div>
    </div>
  )
}

export default ProductsPage