// Product.js
function Product({ name, description, price, category }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="product-price">{price}</p>
      <p className="product-category">{category}</p>
    </div>
  );
}

export default Product;
