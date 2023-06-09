import Button from "../Components/Elements/Button/Button";
import CardProduct from "../Components/Fragments/CardProduct";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "Rp. 1000.000",
      image: "/images/produk-1.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem iusto, quia repellat mollitia et animi, consectetur praesentium non voluptatem sit! Dolores aliquam quod laboriosam adipisci quae laborum autem! Sint.`,
    },
    {
      id: 2,
      name: "Product 1",
      price: "Rp. 1.900.000",
      image: "/images/produk-1.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem iusto, quia repellat mollitia et animi..`,
    },
  ];

  return (
    <>
      <div className="flex justify-center py-10">
        {products.map((product) => (
          <CardProduct>
            <CardProduct.Header images={product.image} />
            <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
