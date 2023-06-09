import Button from "../Components/Elements/Button/Button";
import CardProduct from "../Components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <>
      <div className="flex justify-center py-10">
        <CardProduct>
          <CardProduct.Header images="/images/produk-1.jpg" />
          <CardProduct.Body title="Product 1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem iusto, quia repellat mollitia et animi, consectetur praesentium non voluptatem sit! Dolores aliquam quod laboriosam adipisci quae laborum autem! Sint.
          </CardProduct.Body>
          <CardProduct.Footer price={"Rp. 1000.000"} />
        </CardProduct>
      </div>
    </>
  );
};

export default ProductsPage;
